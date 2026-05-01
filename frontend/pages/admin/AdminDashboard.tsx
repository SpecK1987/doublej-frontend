import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import api from "../../utils/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    activeDrivers: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    api
      .get("/api/admin/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h2 className="font-semibold text-lg">Total Orders</h2>
            <p className="text-3xl font-bold mt-2">{stats.totalOrders}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h2 className="font-semibold text-lg">Active Drivers</h2>
            <p className="text-3xl font-bold mt-2">{stats.activeDrivers}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
            <h2 className="font-semibold text-lg">Pending Orders</h2>
            <p className="text-3xl font-bold mt-2">{stats.pendingOrders}</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
