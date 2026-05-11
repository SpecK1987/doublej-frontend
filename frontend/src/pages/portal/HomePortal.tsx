import AdminLayout from "../../components/AdminLayout"; // if you prefer a separate PortalLayout, swap this
import Fab from "../../components/Fab";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useToast } from "../../components/ToastProvider";
import PageTransition from "../../components/PageTransition";

const PortalHome = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    activeOrders: 0,
    lastOrderDestination: "",
  });
  const { showToast } = useToast();

  useEffect(() => {
    api
      .get("/api/portal/stats")
      .then((res) => setStats(res.data))
      .catch(() => showToast("Could not load portal stats", "error"));
  }, [showToast]);

  const name = localStorage.getItem("customerName") || "Customer";

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Welcome banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
          <div>
            <div className="text-xs uppercase tracking-wide opacity-80">Welcome back</div>
            <div className="text-2xl font-bold">Hi, {name}.</div>
            <div className="text-sm opacity-90 mt-1">
              Ready to schedule your next run or check on active loads?
            </div>
          </div>
          <div className="flex gap-3 text-xs">
            <button
              onClick={() => showToast("New order flow coming right up.", "info")}
              className="px-4 py-2 rounded-full bg-white text-blue-700 font-semibold shadow hover:bg-blue-50"
            >
              New Order
            </button>
            <button
              onClick={() => showToast("Support will be available here.", "info")}
              className="px-4 py-2 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <div className="text-gray-500">Total Orders</div>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
          </div>
          <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <div className="text-gray-500">Active Orders</div>
            <div className="text-2xl font-bold">{stats.activeOrders}</div>
          </div>
          <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <div className="text-gray-500">Last Destination</div>
            <div className="text-base font-semibold">
              {stats.lastOrderDestination || "—"}
            </div>
          </div>
        </div>

        {/* Recent activity placeholder */}
        <div className="rounded-xl bg-white shadow-sm p-4 text-sm">
          <div className="font-semibold mb-2">Recent Activity</div>
          <p className="text-gray-500">
            Your recent orders and status updates will appear here as the platform evolves.
          </p>
        </div>
      </div>

      <Fab />
    </AdminLayout>
  );
};

export default PortalHome;
