import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import api from "../../utils/api";
import Skeleton from "../../components/Skeleton";
import PageTransition from "../../components/PageTransition";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    activeDrivers: 0,
    pendingOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/admin/stats")
      .then((res) => setStats(res.data))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: "Total Orders", value: stats.totalOrders },
    { label: "Active Drivers", value: stats.activeDrivers },
    { label: "Pending Orders", value: stats.pendingOrders },
  ];

  return (
    <AdminLayout>
      <PageTransition>
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card) => (
              <div
                key={card.label}
                className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-4 hover:shadow-md transition"
              >
                <div className="text-xs text-gray-500">{card.label}</div>
                {loading ? (
                  <Skeleton className="h-6 w-16 mt-2" />
                ) : (
                  <div className="text-3xl font-bold mt-2">{card.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </AdminLayout>
  );
};

export default AdminDashboard;
