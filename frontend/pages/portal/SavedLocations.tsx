import { useEffect, useState } from "react";
import PortalLayout from "../../components/PortalLayout";
import { api } from "../../utils/api";

interface Location {
  _id: string;
  label: string;
  address: string;
  lat?: number;
  lng?: number;
}

const SavedLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const loadLocations = async () => {
    try {
      const res = await api.get("/api/locations", authHeader());
      setLocations(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const deleteLocation = async (id: string) => {
    try {
      await api.delete(`/api/locations/${id}`, authHeader());
      loadLocations();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PortalLayout>
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Saved Locations</h1>

        {loading ? (
          <p>Loading...</p>
        ) : locations.length === 0 ? (
          <p>No saved locations.</p>
        ) : (
          <div className="space-y-4">
            {locations.map((loc) => (
              <div key={loc._id} className="border p-4 rounded shadow">
                <p className="font-semibold">{loc.label}</p>
                <p>{loc.address}</p>
                {loc.lat && loc.lng && (
                  <p className="text-sm text-gray-500">
                    ({loc.lat}, {loc.lng})
                  </p>
                )}

                <button
                  onClick={() => deleteLocation(loc._id)}
                  className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </PortalLayout>
  );
};

export default SavedLocations;
