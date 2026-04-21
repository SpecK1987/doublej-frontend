import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-navy mb-4">My Orders</h1>

      <a
        href="/portal/orders/new"
        className="bg-primary text-navy px-4 py-2 rounded font-bold"
      >
        + New Order
      </a>

      <table className="w-full mt-6 bg-white shadow">
        <thead className="bg-navy text-white">
          <tr>
            <th className="p-3">Delivery Location</th>
            <th className="p-3">Goods Type</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o: any) => (
            <tr key={o._id} className="border-b">
              <td className="p-3">{o.deliveryLocation}</td>
              <td className="p-3">{o.goodsType}</td>
              <td className="p-3 capitalize">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
