import { useEffect, useState } from "react";
import PortalLayout from "../../components/PortalLayout";
import { api } from "../../utils/api";

interface ProfileData {
  name: string;
  email: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await api.get("/api/profile", authHeader());
        setProfile({ name: res.data.name, email: res.data.email });
      } catch (err) {
        console.error(err);
      }
    };

    loadProfile();
  }, []);

  const updateProfile = async () => {
    if (!profile) return;
    setSaving(true);
    setMessage("");

    try {
      await api.put(
        "/api/profile",
        {
          name: profile.name,
          email: profile.email,
        },
        authHeader()
      );
      setMessage("Profile updated");
    } catch (err) {
      setMessage("Failed to update profile");
    }

    setSaving(false);
  };

  if (!profile) {
    return (
      <PortalLayout>
        <p>Loading...</p>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="max-w-xl">
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
            disabled={saving}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </PortalLayout>
  );
};

export default Profile;
