import { useEffect, useState } from "react";
import { API, authHeader } from "../../utils/api";
import StatusTimeline from "../../components/StatusTimeline";

interface Order {
  _id: string;
  pickupLocation: string;
  deliveryLocation: string;
  goodsType: string;
  specialNotes: string;
  status: "pending" | "scheduled" | "in_transit" | "delivered";
  createdAt: string;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const loadOrders = async () => {
    const res = await fetch(`${API}/api/orders/admin/all`, {
      headers: authHeader()
    });
    setOrders(await res.json());
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateStatus = async (id: string, status: Order["status"]) => {
    setUpdatingId(id);
    await fetch(`${API}/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeader() },
      body: JSON.stringify({ status })
    });
    setUpdatingId(null);
    loadOrders();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-navy">Admin Orders</h1>
        <button
          onClick={loadOrders}
          className="bg-primary text-navy px-4 py-2 rounded font-semibold"
        >
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-lightgrey text-left">
            <tr>
              <th className="p-3">Created</th>
              <th className="p-3">Pickup</th>
              <th className="p-3">Delivery</th>
              <th className="p-3">Goods</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o._id} className="border-t">
                <td className="p-3">
                  {new Date(o.createdAt).toLocaleString()}
                </td>
                <td className="p-3">{o.pickupLocation}</td>
                <td className="p-3">{o.deliveryLocation}</td>
                <td className="p-3">{o.goodsType}</td>
                <td className="p-3">
                  <StatusTimeline status={o.status} />
                </td>
                <td className="p-3 space-x-2">
                  {["pending", "scheduled", "in_transit", "delivered"].map(
                    (s) => (
                      <button
                        key={s}
                        onClick={() =>
                          updateStatus(o._id, s as Order["status"])
                        }
                        className={`px-2 py-1 text-xs rounded ${
                          o.status === s
                            ? "bg-primary text-navy"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        disabled={updatingId === o._id}
                      >
                        {s.replace("_", " ")}
                      </button>
                    )
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td className="p-3 text-center text-gray-500" colSpan={6}>
                  No orders yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
