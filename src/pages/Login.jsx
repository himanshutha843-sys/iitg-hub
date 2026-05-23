import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    console.log(data);
    alert("Login successful");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <input
        type="email"
        placeholder="Enter IITG Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded w-full mb-4"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}