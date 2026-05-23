import { Link } from "react-router-dom";

export default function Home() {
  const sems = Array.from({ length: 8 }, (_, i) => `Sem ${i + 1}`);

  return (
    <div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-3xl shadow-lg mb-10">
        <h1 className="text-5xl font-bold mb-4">
          IITG Student Hub 🚀
        </h1>

        <p className="text-lg opacity-90">
          Notes, PYQs, Coding, Internships and Exam Resources —
          all in one place.
        </p>
      </div>

      {/* Semester Cards */}
      <h2 className="text-2xl font-bold mb-6">
        Semesters
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {sems.map((sem, i) => (
          <Link
            key={sem}
            to={`/semester/${i + 1}`}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {sem}
            </h3>
          </Link>
        ))}

      </div>
    </div>
  );
}