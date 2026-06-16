const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const SECRET = "iitg-secret-key";

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONNECT DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/iitg");

// =========================
// FILE STORAGE CONFIG
// =========================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ALLOW ACCESS TO UPLOADED FILES
app.use("/uploads", express.static("uploads"));

// =========================
// DATABASE SCHEMAS
// =========================
const ResourceSchema = new mongoose.Schema({
  subject: String,
  title: String,
  link: String,
  uploadedBy: String,
});

const Resource = mongoose.model("Resource", ResourceSchema);

// USER SCHEMA
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

// COMPANY SCHEMA


const CompanySchema = new mongoose.Schema({
  company: String,
  internshipType: String,
  cutoff: String,

  branches: [String],

  process: [String],

  oaLinks: [
    {
      title: String,
      link: String,
    }
  ],

  interviewExperiences: [
    {
      student: String,
      branch: String,
      experience: String,
    }
  ],

  advice: [
    {
      student: String,
      advice: String,
    }
  ],

  description: String,
});
const Company = mongoose.model(
  "Company",
  CompanySchema
);
// =========================
// ROUTES
// =========================
// LOGIN

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid) {
    return res.status(400).json({
      message: "Wrong password",
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
    },
    SECRET
  );

  res.json({
    token,
    email: user.email,
  });
});

// REGISTER
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // IITG ONLY
  if (!email.endsWith("@iitg.ac.in")) {
    return res.status(400).json({
      message: "Only IITG emails allowed",
    });
  }

  const existing = await User.findOne({ email });

  if (existing) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashed,
  });

  await user.save();

  res.json({
    message: "Registered successfully",
  });
});
// ADD RESOURCE
app.post("/add", async (req, res) => {
 const { subject, title, link, uploadedBy } = req.body;

  const newResource = new Resource({
    subject,
    title,
    link,
    uploadedBy,
  });

  await newResource.save();

  res.json({
    message: "Saved",
  });
});

// GET RESOURCES
app.get("/resources/:subject", async (req, res) => {
  const data = await Resource.find({
    subject: req.params.subject,
  });

  res.json(data);
});

// FILE UPLOAD
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    filePath: `http://localhost:5000/uploads/${req.file.filename}`,
  });
});

// experience upload route
app.post("/company/experience", async (req, res) => {

  console.log(req.body);
  const {
    company,
    student,
    branch,
    experience
  } = req.body;

  await Company.updateOne(
    { company },

    {
      $push: {
        interviewExperiences: {
          student,
          branch,
          experience
        }
      }
    }
  );

  res.json({
    message: "Experience Added"
  });

});



// Seed Route
app.get("/seed-companies", async (req, res) => {

  await Company.deleteMany({});

  const companies = [

    {
      company: "Google",
      internshipType: "OnCampus",
      cutoff: "8.0",
      branches: ["CSE", "MnC", "ECE"],
      process: [
        "Resume Shortlist",
        "OA",
        "Technical Interview",
        "HR"
      ],
      description:
        "Software Engineering Internship"
    },

    {
      company: "Microsoft",
      internshipType: "OnCampus",
      cutoff: "7.5",
      branches: ["CSE", "MnC", "ECE"],
      process: [
        "Resume Shortlist",
        "OA",
        "Technical Interview"
      ],
      description:
        "Software Development Internship"
    },

    {
      company: "Adobe",
      internshipType: "OnCampus",
      cutoff: "7.0",
      branches: ["CSE", "MnC"],
      process: [
        "Resume",
        "OA",
        "Interview"
      ],
      description:
        "MTS Internship"
    }

  ];

  await Company.insertMany(companies);

  res.json({
    message: "Companies Added"
  });

});


// Company list API

app.get("/companies", async (req, res) => {

  const companies = await Company.find();

  res.json(companies);

});

// company Details

app.get("/company/:name", async (req, res) => {

  const company = await Company.findOne({
    company: req.params.name
  });

  res.json(company);

});

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

