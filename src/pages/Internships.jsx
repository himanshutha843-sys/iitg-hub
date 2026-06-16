import { Link } from "react-router-dom";

export default function Internships() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Internship Portal
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          to="/on-campus"
          className="bg-blue-500 text-white p-8 rounded-2xl"
        >
          🏢 On-Campus Internships
        </Link>

        <Link
          to="/off-campus"
          className="bg-green-500 text-white p-8 rounded-2xl"
        >
          🌍 Off-Campus Internships
        </Link>

        <Link
          to="/core-internships"
          className="bg-purple-500 text-white p-8 rounded-2xl"
        >
          ⚙️ Core Internships
        </Link>

        <Link
          to="/preparation-hub"
          className="bg-orange-500 text-white p-8 rounded-2xl"
        >
          📚 Preparation Hub
        </Link>

      </div>

    </div>
  );
}