import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import api from "../../utils/api";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await api.put(`/api/orders/${id}/status`, { status });
    setOrders((prev) =>
      prev.map((o) => (o._id === id ? { ...o, status } : o))
    );
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">All Orders</h1>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Pickup</th>
              <th className="p-2 border">Dropoff</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order: any) => (
              <tr key={order._id}>
                <td className="p-2 border">{order.customerName}</td>
                <td className="p-2 border">{order.pickup}</td>
                <td className="p-2 border">{order.dropoff}</td>
                <td className="p-2 border">{order.status}</td>

                <td className="p-2 border">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                    onClick={() => updateStatus(order._id, "in-progress")}
                  >
                    In Progress
                  </button>

                  <button
                    className="px-2 py-1 bg-green-600 text-white rounded mr-2"
                    onClick={() => updateStatus(order._id, "completed")}
                  >
                    Complete
                  </button>

                  <button
                    className="px-2 py-1 bg-red-600 text-white rounded"
                    onClick={() => updateStatus(order._id, "cancelled")}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
