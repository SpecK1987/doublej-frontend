import { useEffect, useState } from "react";
import { api } from "../../utils/api";

const SavedLocations = () => {
  const [locations, setLocations] = useState([]);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const loadLocations = async () => {
    const res = await api.get("/api/locations", authHeader());
    setLocations(res.data);
  };

  const deleteLocation = async (id: string) => {
    await api.delete(`/api/locations/${id}`, authHeader());
    loadLocations();
  };

  useEffect(() => {
    loadLocations();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Saved Locations</h1>

      {locations.length === 0 ? (
        <p>No saved locations.</p>
      ) : (
        <div className="space-y-4">
          {locations.map((loc: any) => (
            <div key={loc._id} className="border p-4 rounded shadow">
              <p><strong>{loc.label}</strong></p>
              <p>{loc.address}</p>

              <button
                onClick={() => deleteLocation(loc._id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedLocations;
