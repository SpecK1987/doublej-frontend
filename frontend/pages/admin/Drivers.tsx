import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import api from "../../utils/api";
import Skeleton from "../../components/Skeleton";
import Modal from "../../components/Modal";
import PageTransition from "../../components/PageTransition";

type Driver = {
  _id: string;
  name: string;
  phone: string;
  status: string;
};

const statusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";
    case "on-delivery":
      return "bg-blue-100 text-blue-700";
    case "inactive":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Drivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Driver | null>(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/api/admin/drivers")
      .then((res) => setDrivers(res.data))
      .finally(() => setLoading(false));
  }, []);

  const filtered = drivers.filter((d) =>
    filter === "all" ? true : d.status === filter
  );

  return (
    <AdminLayout>
      <PageTransition>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Drivers</h1>
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full border ${
                  filter === "all"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded-full border ${
                  filter === "active"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("inactive")}
                className={`px-3 py-1 rounded-full border ${
                  filter === "inactive"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                Inactive
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800 text-left text-xs text-gray-600 dark:text-gray-300">
                  <th className="p-2 border-b dark:border-gray-700">Name</th>
                  <th className="p-2 border-b dark:border-gray-700">Phone</th>
                  <th className="p-2 border-b dark:border-gray-700">Status</th>
                  <th className="p-2 border-b dark:border-gray-700 w-24"></th>
                </tr>
              </thead>
              <tbody>
                {loading &&
                  Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i}>
                      <td className="p-2 border-b dark:border-gray-800">
                        <Skeleton className="h-4 w-32" />
                      </td>
                      <td className="p-2 border-b dark:border-gray-800">
                        <Skeleton className="h-4 w-24" />
                      </td>
                      <td className="p-2 border-b dark:border-gray-800">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="p-2 border-b dark:border-gray-800">
                        <Skeleton className="h-4 w-12" />
                      </td>
                    </tr>
                  ))}

                {!loading &&
                  filtered.map((d) => (
                    <tr key={d._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="p-2 border-b dark:border-gray-800">{d.name}</td>
                      <td className="p-2 border-b dark:border-gray-800">{d.phone}</td>
                      <td className="p-2 border-b dark:border-gray-800">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-semibold ${statusColor(
                            d.status
                          )}`}
                        >
                          {d.status}
                        </span>
                      </td>
                      <td className="p-2 border-b dark:border-gray-800 text-right">
                        <button
                          onClick={() => setSelected(d)}
                          className="text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}

                {!loading && filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="p-4 text-center text-xs text-gray-500 dark:text-gray-400"
                    >
                      No drivers match this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Modal
            open={!!selected}
            onClose={() => setSelected(null)}
            title={selected?.name || "Driver details"}
          >
            {selected && (
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Phone: </span>
                  {selected.phone}
                </div>
                <div>
                  <span className="font-semibold">Status: </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${statusColor(selected.status)}`}>
                    {selected.status}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Future enhancements: assigned loads, performance metrics, and live location.
                </p>
              </div>
            )}
          </Modal>
        </div>
      </PageTransition>
    </AdminLayout>
  );
};

export default Drivers;
