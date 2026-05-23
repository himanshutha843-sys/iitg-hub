import { Link, useParams } from "react-router-dom";

export default function Semester() {
  const { id } = useParams();

  // Example subjects (you will expand later)
  const subjects = ["BT201", "BT202", "BT203"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Semester {id}</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {subjects.map((sub) => (
          <Link
            key={sub}
            to={`/subject/${sub}`}
            className="p-6 bg-white rounded-xl shadow hover:scale-105 transition text-center"
          >
            {sub}
          </Link>
        ))}
      </div>
    </div>
  );
}