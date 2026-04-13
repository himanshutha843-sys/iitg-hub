export default function Gate() {
  const subjects = [
    "Engineering Mathematics",
    "Data Structures & Algorithms",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">GATE Preparation</h1>

      {/* Strategy Section */}
      <div className="bg-blue-100 p-6 rounded-2xl mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 Strategy</h2>
        <p>
          Start with Mathematics and core subjects. Solve PYQs regularly and revise consistently.
        </p>
      </div>

      {/* Subjects Section */}
      <h2 className="text-xl font-semibold mb-4">Subjects</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {subjects.map((sub) => (
          <div key={sub} className="p-4 bg-white rounded-xl shadow">
            {sub}
          </div>
        ))}
      </div>

      {/* Resources Section */}
      <h2 className="text-xl font-semibold mb-4">Resources</h2>
      <div className="space-y-3">
        <a
          href="https://gateoverflow.in"
          target="_blank"
          className="block p-4 bg-gray-100 rounded-xl"
        >
          🔗 GateOverflow (Best for doubts)
        </a>

        <a
          href="https://www.geeksforgeeks.org"
          target="_blank"
          className="block p-4 bg-gray-100 rounded-xl"
        >
          🔗 GeeksforGeeks (Concepts)
        </a>
      </div>
    </div>
  );
}