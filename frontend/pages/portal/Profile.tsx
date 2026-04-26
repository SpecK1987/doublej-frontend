import { useEffect, useState } from "react";
import { API, authHeader } from "../../utils/api";

export default function Profile() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    defaultInstructions: ""
  });

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API}/api/profile/me`, {
        headers: authHeader()
      });
      const data = await res.json();
      setForm({
        name: data.name || "",
        company: data.company || "",
        phone: data.phone || "",
        defaultInstructions: data.defaultInstructions || ""
      });
    })();
  }, []);

  const save = async () => {
    await fetch(`${API}/api/profile/me`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify(form)
    });
    alert("Profile updated");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-navy mb-4">My Profile</h1>

      {["name", "company", "phone"].map((field) => (
        <label key={field} className="block mb-4">
          <span className="text-sm font-medium text-gray-700 capitalize">
            {field}
          </span>
          <input
            className="w-full p-3 border rounded mt-1"
            value={(form as any)[field]}
            onChange={(e) =>
              setForm((f) => ({ ...f, [field]: e.target.value }))
            }
          />
        </label>
      ))}

      <label className="block mb-4">
        <span className="text-sm font-medium text-gray-700">
          Default Delivery Instructions
        </span>
        <textarea
          className="w-full p-3 border rounded mt-1 h-24"
          value={form.defaultInstructions}
          onChange={(e) =>
            setForm((f) => ({ ...f, defaultInstructions: e.target.value }))
          }
        />
      </label>

      <button
        onClick={save}
        className="bg-primary text-navy px-6 py-2 rounded font-bold"
      >
        Save Profile
      </button>
    </div>
  );
}
