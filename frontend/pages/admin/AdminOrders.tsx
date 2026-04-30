import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { api } from "../../utils/api";

interface Order {
  _id: string;
  serviceType: string;
  description?: string;
  status: string;
  createdAt: string;
  user?: {
    name?: string;
    email?: string;
  };
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const loadOrders = async () => {
    try {
      const res = await api.get("/api/orders", authHeader());
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    setSavingId(id);
    try {
      await api.put(`/api/orders/${id}`, { status }, authHeader());
      await loadOrders();
    } catch (err) {
      console.error(err);
    }
    setSavingId(null);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">All Orders</h1>

        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="border p-4 rounded shadow">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p>
                      <strong>Service:</strong> {order.serviceType}
                    </p>
                    {order.description && (
                      <p>
                        <strong>Description:</strong> {order.description}
                      </p>
                    )}
                    {order.user && (
                      <p className="text-sm text-gray-600">
                        <strong>Customer:</strong>{" "}
                        {order.user.name} ({order.user.email})
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="mb-2">
                      <strong>Status:</strong> {order.status}
                    </p>
                    <div className="space-x-2">
                      {["pending", "in-progress", "completed", "cancelled"].map(
                        (s) => (
                          <button
                            key={s}
                            onClick={() => updateStatus(order._id, s)}
                            disabled={savingId === order._id}
                            className={`px-3 py-1 rounded text-sm ${
                              order.status === s
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                          >
                            {s}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminOrders;
