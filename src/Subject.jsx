import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Subject() {
  const { id } = useParams();

  // 🔥 YOUR DATA
  const data = {
    BT201: {
      lectures: [
        { title: "Your Notes", link: "https://example.com" },
      ],
      midsem: [
        { title: "Midsem 2023", link: "https://example.com" },
      ],
      endsem: [
        { title: "Endsem 2022", link: "https://example.com" },
      ],
      advice: "Focus on PYQs and diagrams."
    }
  };

  const subject = data[id];

  // 🟢 STATE (MUST COME FIRST)
  const [newItem, setNewItem] = useState("");
  const [resources, setResources] = useState(subject?.lectures || []);

  // 🟢 FETCH DATA FROM BACKEND
  useEffect(() => {
    fetch(`http://localhost:5000/resources/${id}`)
      .then(res => res.json())
      .then(data => setResources(data));
  }, [id]);

  // 🟢 ADD RESOURCE
  const addResource = async () => {
  if (!newItem) return;

  console.log("Sending request..."); // 👈 ADD THIS

  try {
    const res = await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: id,
        title: newItem,
        link: newItem,
      }),
    });

    const data = await res.json();
    console.log("Response:", data); // 👈 ADD THIS

    setResources([...resources, { title: newItem, link: newItem }]);
    setNewItem("");

  } catch (err) {
    console.error("Error:", err); // 👈 ADD THIS
  }
};

  if (!subject) {
    return <div className="p-6">No data available</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{id}</h1>

      {/* Upload Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➕ Add Resource</h2>

        <div className="flex gap-2">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Paste link..."
            className="p-2 border rounded w-full"
          />

          <button
            onClick={addResource}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>

      {/* Lectures */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📚 Lectures</h2>
        {resources.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="block p-3 bg-gray-100 rounded mb-2"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Midsem */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📝 Mid Sem</h2>
        {subject.midsem.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="block p-3 bg-gray-100 rounded mb-2"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Endsem */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📄 End Sem</h2>
        {subject.endsem.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="block p-3 bg-gray-100 rounded mb-2"
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Advice */}
      <div className="p-4 bg-purple-100 rounded">
        💡 {subject.advice}
      </div>
    </div>
  );
}