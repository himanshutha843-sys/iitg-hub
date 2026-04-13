const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 CONNECT TO DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/iitg");

// 🧠 SCHEMA
const ResourceSchema = new mongoose.Schema({
  subject: String,
  title: String,
  link: String,
});

const Resource = mongoose.model("Resource", ResourceSchema);

// 📥 ADD RESOURCE
app.post("/add", async (req, res) => {
  const { subject, title, link } = req.body;

  const newResource = new Resource({ subject, title, link });
  await newResource.save();

  res.json({ message: "Saved" });
});

// 📤 GET RESOURCES BY SUBJECT
app.get("/resources/:subject", async (req, res) => {
  const data = await Resource.find({ subject: req.params.subject });
  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));