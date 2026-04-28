import { useEffect, useState } from "react";
import PortalLayout from "../../components/PortalLayout";
import { api } from "../../utils/api";

interface Order {
  _id: string;
  serviceType: string;
  description?: string;
  status: string;
  createdAt: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const res = await api.get("/api/orders/my", authHeader());
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    loadOrders();
  }, []);

  return (
    <PortalLayout>
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">My Orders</h1>

        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="border p-4 rounded shadow">
                <p>
                  <strong>Service:</strong> {order.serviceType}
                </p>
                {order.description && (
                  <p>
                    <strong>Description:</strong> {order.description}
                  </p>
                )}
                <p>
                  <strong>Status:</strong> {order.status}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </PortalLayout>
  );
};

export default Orders;
