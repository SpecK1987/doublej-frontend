export const API = import.meta.env.VITE_API_URL;

export const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`
});

const res = await fetch(`${API}/api/orders`, {
  headers: {
    "Content-Type": "application/json",
    ...authHeader()
  }
});
