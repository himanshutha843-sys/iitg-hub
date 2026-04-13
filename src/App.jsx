import Gate from "./Gate";
import Semester from "./Semester";
import Subject from "./Subject";
import { Routes, Route, Link } from "react-router-dom";



function Navbar() {
  return (
    <div className="flex gap-6 p-4 shadow-md bg-white sticky top-0">
      <Link to="/">Home</Link>
      <Link to="/exams">Exams</Link>
      <Link to="/internships">Internships</Link>
      <Link to="/coding">Coding Plan</Link>
    </div>
  );
}

function Home() {
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

function Exams() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Exams</h1>

      <div className="grid grid-cols-2 gap-4">
        
        {/* GATE (CLICKABLE) */}
        <Link
          to="/gate"
          className="p-6 bg-gray-100 rounded-xl hover:bg-blue-100 cursor-pointer block text-center"
        >
          GATE
        </Link>

        <div className="p-6 bg-gray-100 rounded-xl text-center">CAT</div>
        <div className="p-6 bg-gray-100 rounded-xl text-center">Other Exams</div>
        <div className="p-6 bg-gray-100 rounded-xl text-center">Higher Studies</div>

      </div>
    </div>
  );
}
function Internships() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Internships</h1>
      <p className="mt-4">Coming soon...</p>
    </div>
  );
}

function Coding() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Coding Plan</h1>
      <p className="mt-4">Coming soon...</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/exams" element={<Exams />} />
  <Route path="/internships" element={<Internships />} />
  <Route path="/coding" element={<Coding />} />
  <Route path="/semester/:id" element={<Semester />} />
  <Route path="/subject/:id" element={<Subject />} />
  {/* NEW ROUTE */}
  <Route path="/gate" element={<Gate />} />
</Routes>
    </div>
  );
}