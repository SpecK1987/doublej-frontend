import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import api from "../../utils/api";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    api
      .get("/api/admin/drivers")
      .then((res) => setDrivers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Drivers</h1>

        <table className="w-full border dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 border dark:border-gray-700">Name</th>
              <th className="p-2 border dark:border-gray-700">Phone</th>
              <th className="p-2 border dark:border-gray-700">Status</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((d) => (
              <tr key={d._id}>
                <td className="p-2 border dark:border-gray-700">{d.name}</td>
                <td className="p-2 border dark:border-gray-700">{d.phone}</td>
                <td className="p-2 border dark:border-gray-700">{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default Drivers;
