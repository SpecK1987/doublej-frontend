import { useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const NewOrder = () => {
  const navigate = useNavigate();

  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post(
        "/api/orders",
        { serviceType, description },
        authHeader()
      );

      setMessage("Order created successfully");
      setTimeout(() => navigate("/portal/orders"), 1000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Failed to create order");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Order</h1>

      {message && (
        <div className="bg-blue-100 text-blue-700 p-3 rounded mb-4">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Service Type</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
            placeholder="Oil Change, Tire Repair, etc."
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue"
          />
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default NewOrder;
