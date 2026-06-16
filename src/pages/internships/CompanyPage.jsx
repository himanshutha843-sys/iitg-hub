import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CompanyPage() {

  const { company } = useParams();
// upload form
  const [student, setStudent] = useState("");
  const [branch, setBranch] = useState("");
  const [experience, setExperience] = useState("");

  const [data, setData] = useState(null);

  const submitExperience = async () => {
// submit 
if (!student || !branch || !experience) {
  alert("Please fill all fields");
  return;
}
  await fetch(
    "http://localhost:5000/company/experience",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        company: data.company,
        student,
        branch,
        experience
      })
    }
  );

  const updated = await fetch(
  `http://localhost:5000/company/${company}`
);

const updatedData = await updated.json();

setData(updatedData);

setStudent("");
setBranch("");
setExperience("");

alert("Experience Added");
};

  useEffect(() => {

    fetch(
      `http://localhost:5000/company/${company}`
    )
      .then(res => res.json())
      .then(data => setData(data));

  }, [company]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        {data.company}
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-6">

        <h2 className="text-xl font-bold">
          Eligibility
        </h2>

        <p className="mt-2">
          CGPA Cutoff: {data.cutoff}
        </p>

        <p className="mt-2">
          Branches:
        </p>

        <ul className="list-disc ml-6">

          {data.branches.map(branch => (
            <li key={branch}>
              {branch}
            </li>
          ))}

        </ul>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-xl font-bold">
          Hiring Process
        </h2>

        <ul className="list-disc ml-6 mt-3">

          {data.process.map(step => (
            <li key={step}>
              {step}
            </li>
          ))}

        </ul>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow mt-6">

  <h2 className="text-xl font-bold mb-4">
    Share Interview Experience
  </h2>

  <input
    placeholder="Name"
    value={student}
    onChange={(e) =>
      setStudent(e.target.value)
    }
    className="border p-2 w-full mb-3"
  />

  <input
    placeholder="Branch"
    value={branch}
    onChange={(e) =>
      setBranch(e.target.value)
    }
    className="border p-2 w-full mb-3"
  />

  <textarea
    placeholder="Interview Experience"
    value={experience}
    onChange={(e) =>
      setExperience(e.target.value)
    }
    className="border p-2 w-full mb-3"
  />

  <button
    onClick={submitExperience}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    Submit
  </button>

</div>

<div className="mt-6">

  <h2 className="text-2xl font-bold mb-4">
    Interview Experiences
  </h2>

  {data.interviewExperiences?.map(
    (exp, i) => (

      <div
        key={i}
        className="bg-white p-4 rounded-xl shadow mb-4"
      >

        <h3 className="font-bold">
          {exp.student}
        </h3>

        <p className="text-gray-500">
          {exp.branch}
        </p>

        <p className="mt-2">
          {exp.experience}
        </p>

      </div>

    )
  )}

</div>

    </div>
  );
}