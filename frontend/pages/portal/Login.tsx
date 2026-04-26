import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../utils/api";

export default function PortalLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (!res.ok) {
      alert("Login failed");
      return;
    }
    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);
    navigate("/portal/orders");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-navy mb-4">Customer Login</h1>
      <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-4">
        <input
          className="w-full p-3 border rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((f) => ({ ...f, email: e.target.value }))
          }
        />
        <input
          className="w-full p-3 border rounded"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm((f) => ({ ...f, password: e.target.value }))
          }
        />
        <button
          type="submit"
          className="w-full bg-primary text-navy px-5 py-2 rounded font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
