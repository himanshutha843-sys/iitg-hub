import { Link } from "react-router-dom";


export default function Home() {
  const sems = Array.from({ length: 8 }, (_, i) => `Sem ${i + 1}`);

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">IITG Student Hub</h1>
        <p className="text-lg">One place for Exams, Internships & Coding Prep 🚀</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Select Your Semester</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {sems.map((sem, i) => (
  <Link
    to={`/semester/${i + 1}`}
    key={sem}
    className="p-6 bg-white rounded-2xl shadow text-center hover:scale-105 transition block"
  >
    {sem}
  </Link>
))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Explore</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/exams" className="p-6 bg-blue-500 text-white rounded-2xl">
          📚 Exams
        </Link>
        <Link to="/internships" className="p-6 bg-green-500 text-white rounded-2xl">
          💼 Internships
        </Link>
        <Link to="/coding" className="p-6 bg-purple-500 text-white rounded-2xl">
          💻 Coding Plan
        </Link>
      </div>
    </div>
  );
}