import { Link } from "react-router-dom";

export default function Exams() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Exams</h1>

      <div className="grid grid-cols-2 gap-4">

        <Link
          to="/gate"
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
        >
          GATE
        </Link>

        <div className="p-6 bg-white rounded-xl shadow text-center">
          CAT
        </div>

        <div className="p-6 bg-white rounded-xl shadow text-center">
          Other Exams
        </div>

        <div className="p-6 bg-white rounded-xl shadow text-center">
          Higher Studies
        </div>

      </div>
    </div>
  );
}