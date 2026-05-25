import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "./Topbar";
import {
  FaHome,
  FaBook,
  FaLaptopCode,
  FaBriefcase,
  FaSignInAlt,
} from "react-icons/fa";

export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
  className={`flex min-h-screen ${
    darkMode ? "bg-gray-900 text-white" : "bg-gray-100"
  }`}
>

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 hidden md:block">

        <h1 className="text-2xl font-bold text-blue-600 mb-10">
          IITG Hub
          
        </h1>
        <button
  onClick={() => setDarkMode(!darkMode)}
  className="mb-8 bg-blue-500 text-white px-4 py-2 rounded-xl"
>
  {darkMode ? "☀ Light" : "🌙 Dark"}
</button>

        <nav className="flex flex-col gap-6 text-gray-700">

          <Link
            to="/"
            className="flex items-center gap-3 hover:text-blue-500"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/exams"
            className="flex items-center gap-3 hover:text-blue-500"
          >
            <FaBook />
            Exams
          </Link>

          <Link
            to="/internships"
            className="flex items-center gap-3 hover:text-blue-500"
          >
            <FaBriefcase />
            Internships
          </Link>

          <Link
            to="/coding"
            className="flex items-center gap-3 hover:text-blue-500"
          >
            <FaLaptopCode />
            Coding
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-3 hover:text-blue-500"
          >
            <FaSignInAlt />
            Login
          </Link>

        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

 <Topbar search={search} setSearch={setSearch} />

  {children}

</div>

    </div>
  );
}