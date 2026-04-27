import { useEffect, useState } from "react";
import { api } from "../../utils/api";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [message, setMessage] = useState("");

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  useEffect(() => {
    const loadProfile = async () => {
      const res = await api.get("/api/profile", authHeader());
      setProfile(res.data);
    };

    loadProfile();
  }, []);

  const updateProfile = async () => {
    const res = await api.put(
      "/api/profile",
      {
        name: profile.name,
        email: profile.email,
      },
      authHeader()
    );

    setMessage("Profile updated");
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      {message && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          {message}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={profile.email}
            onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
            }
          />
        </div>

        <button
          onClick={updateProfile}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
