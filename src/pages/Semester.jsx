import { Link, useParams } from "react-router-dom";

export default function Semester() {
  const { id } = useParams();

  const subjects = [
    "BT201",
    "BT202",
    "BT203",
    "BT204",
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Semester {id}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {subjects.map((sub) => (
          <Link
            key={sub}
            to={`/subject/${sub}`}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              {sub}
            </h2>

            <p className="text-gray-500">
              Notes, PYQs, lectures & advice
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}