import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OnCampus() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/companies")
      .then(res => res.json())
      .then(data => setCompanies(data));

  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        On-Campus Internships
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {companies.map(company => (

          <Link
            key={company.company}
            to={`/company/${company.company}`}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold">
              {company.company}
            </h2>

            <p className="text-gray-500 mt-2">
              {company.description}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}