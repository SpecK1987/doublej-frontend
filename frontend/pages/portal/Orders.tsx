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

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

  const loadOrders = async () => {
    const params = new URLSearchParams();
    if (statusFilter) params.append("status", statusFilter);
    if (search) params.append("search", search);

    const res = await fetch(`${API}/api/orders?${params.toString()}`, {
      headers: authHeader()
    });
    setOrders(await res.json());
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-navy">My Orders</h1>
        <a
          href="/portal/orders/new"
          className="bg-primary text-navy px-4 py-2 rounded font-semibold"
        >
          New Order
        </a>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <select
          className="p-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="scheduled">Scheduled</option>
          <option value="in_transit">In Transit</option>
          <option value="delivered">Delivered</option>
        </select>
        <input
          className="p-2 border rounded flex-1 min-w-[200px]"
          placeholder="Search by delivery location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={loadOrders}
          className="bg-primary text-navy px-4 py-2 rounded font-semibold"
        >
          Apply
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
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td className="p-3 text-center text-gray-500" colSpan={5}>
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
