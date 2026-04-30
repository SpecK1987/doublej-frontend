import AdminLayout from "../../components/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-700">
        Welcome to the admin panel. Use the sidebar to manage orders.
      </p>
    </AdminLayout>
  );
};

export default AdminDashboard;
