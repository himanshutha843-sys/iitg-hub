import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Internships from "./pages/Internships";
import Coding from "./pages/Coding";
import Gate from "./pages/Gate";
import Semester from "./pages/Semester";
import Subject from "./pages/Subject";
import Login from "./pages/Login";
import OnCampus from "./pages/internships/OnCampus";
import CompanyPage from "./pages/internships/CompanyPage";

export default function App() {
  return (
    <Layout>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/gate" element={<Gate />} />
        <Route path="/semester/:id" element={<Semester />} />
        <Route path="/subject/:id" element={<Subject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/on-campus" element={<OnCampus />} />

        <Route path="/company/:company" element={<CompanyPage />}/>
     </Routes>
</Layout>
  );
}