import { useState } from "react";

export default function PortalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) return setError(data.msg);

      localStorage.setItem("token", data.token);
      window.location.href = "/portal/orders";
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightgrey">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-navy mb-4">Customer Login</h1>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="w-full p-2 border mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-primary text-navy py-2 rounded font-bold"
        >
          Login
        </button>
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
      </div>
    </div>
  );
}
