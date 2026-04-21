import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/admin/all`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();
    setOrders(data);
  };

  const updateStatus = async (id: string, status: string) => {
    const token = localStorage.getItem("token");

    await fetch(`${import.meta.env.VITE_API_URL}/api/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ status })
    });

    loadOrders();
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-navy mb-4">Admin Orders</h1>

      <table className="w-full bg-white shadow">
        <thead className="bg-navy text-white">
          <tr>
            <th className="p-3">Customer</th>
            <th className="p-3">Delivery</th>
            <th className="p-3">Goods</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o: any) => (
            <tr key={o._id} className="border-b">
              <td className="p-3">{o.customerId}</td>
              <td className="p-3">{o.deliveryLocation}</td>
              <td className="p-3">{o.goodsType}</td>
              <td className="p-3 capitalize">{o.status}</td>
              <td className="p-3 space-x-2">
                {["pending", "scheduled", "in_transit", "delivered"].map((s) => (
                  <button
                    key={s}
                    onClick={() => updateStatus(o._id, s)}
                    className="bg-primary text-navy px-2 py-1 rounded"
                  >
                    {s}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
