import { useEffect, useState } from "react";
import { API, authHeader } from "../../utils/api";

interface SavedLocation {
  label: string;
  type: string;
  location: string;
}

export default function SavedLocations() {
  const [locations, setLocations] = useState<SavedLocation[]>([]);
  const [form, setForm] = useState<SavedLocation>({
    label: "",
    type: "",
    location: ""
  });

  const load = async () => {
    const res = await fetch(`${API}/api/locations`, { headers: authHeader() });
    setLocations(await res.json());
  };

  useEffect(() => {
    load();
  }, []);

  const add = async () => {
    await fetch(`${API}/api/locations`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify(form)
    });
    setForm({ label: "", type: "", location: "" });
    load();
  };

  const remove = async (index: number) => {
    await fetch(`${API}/api/locations/${index}`, {
      method: "DELETE",
      headers: authHeader()
    });
    load();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-navy mb-4">
        Saved Delivery Locations
      </h1>

      <div className="bg-lightgrey p-4 rounded mb-6">
        <div className="grid md:grid-cols-3 gap-3">
          <input
            className="p-2 border rounded"
            placeholder="Label (e.g. M/V Gulf Runner)"
            value={form.label}
            onChange={(e) =>
              setForm((f) => ({ ...f, label: e.target.value }))
            }
          />
          <select
            className="p-2 border rounded"
            value={form.type}
            onChange={(e) =>
              setForm((f) => ({ ...f, type: e.target.value }))
            }
          >
            <option value="">Type</option>
            <option>Boat</option>
            <option>Platform</option>
            <option>Business</option>
          </select>
          <input
            className="p-2 border rounded"
            placeholder="Location details"
            value={form.location}
            onChange={(e) =>
              setForm((f) => ({ ...f, location: e.target.value }))
            }
          />
        </div>
        <button
          onClick={add}
          className="mt-3 bg-primary text-navy px-4 py-2 rounded font-bold"
        >
          Add Location
        </button>
      </div>

      <ul className="space-y-2">
        {locations.map((loc, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
          >
            <div>
              <p className="font-semibold text-navy">{loc.label}</p>
              <p className="text-xs text-gray-600">
                {loc.type} • {loc.location}
              </p>
            </div>
            <button
              onClick={() => remove(i)}
              className="text-sm text-red-500 font-semibold"
            >
              Remove
            </button>
          </li>
        ))}
        {locations.length === 0 && (
          <p className="text-sm text-gray-500">No saved locations yet.</p>
        )}
      </ul>
    </div>
  );
}
