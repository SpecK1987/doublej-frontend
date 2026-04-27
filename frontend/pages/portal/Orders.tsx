import { useEffect, useState } from "react";
import { api } from "../../utils/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  useEffect(() => {
    const loadOrders = async () => {
      const res = await api.get("/api/orders/my", authHeader());
      setOrders(res.data);
    };

    loadOrders();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order: any) => (
            <div key={order._id} className="border p-4 rounded shadow">
              <p><strong>Service:</strong> {order.serviceType}</p>
              <p><strong>Description:</strong> {order.description}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p className="text-sm text-gray-500">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
