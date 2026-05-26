import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch(
      "http://localhost:5000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    console.log(data);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.email);

    alert("Logged in!");
  };

  const register = async () => {
    const res = await fetch(
      "http://localhost:5000/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    console.log(data);

    alert(data.message);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        IITG Login
      </h1>

      <input
        type="email"
        placeholder="IITG Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-xl mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border rounded-xl mb-6"
      />

      <div className="flex gap-4">

        <button
          onClick={login}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl"
        >
          Login
        </button>

        <button
          onClick={register}
          className="bg-green-500 text-white px-6 py-3 rounded-xl"
        >
          Register
        </button>

      </div>

    </div>
  );
}