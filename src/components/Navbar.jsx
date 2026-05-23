import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      
      <Link to="/" className="text-2xl font-bold text-blue-600">
        IITG Hub
      </Link>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>

        <Link to="/exams" className="hover:text-blue-500 transition">
          Exams
        </Link>

        <Link to="/internships" className="hover:text-blue-500 transition">
          Internships
        </Link>

        <Link to="/coding" className="hover:text-blue-500 transition">
          Coding
        </Link>

        <Link to="/login" className="hover:text-blue-500 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}