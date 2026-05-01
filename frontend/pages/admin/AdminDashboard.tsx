import AdminLayout from "../../components/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded p-4">
            <h2 className="font-semibold text-lg">Total Orders</h2>
            <p className="text-3xl font-bold mt-2">128</p>
          </div>

          <div className="bg-white shadow rounded p-4">
            <h2 className="font-semibold text-lg">Active Drivers</h2>
            <p className="text-3xl font-bold mt-2">6</p>
          </div>

          <div className="bg-white shadow rounded p-4">
            <h2 className="font-semibold text-lg">Pending Orders</h2>
            <p className="text-3xl font-bold mt-2">14</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
