export const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const authHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};
