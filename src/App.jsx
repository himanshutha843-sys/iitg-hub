import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Internships from "./pages/Internships";
import Coding from "./pages/Coding";
import Gate from "./pages/Gate";
import Semester from "./pages/Semester";
import Subject from "./pages/Subject";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/gate" element={<Gate />} />
        <Route path="/semester/:id" element={<Semester />} />
        <Route path="/subject/:id" element={<Subject />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}