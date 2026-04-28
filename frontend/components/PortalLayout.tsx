import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/portal/login");
  };

  const navItems = [
    { label: "Home", path: "/portal/home" },
    { label: "New Order", path: "/portal/new-order" },
    { label: "My Orders", path: "/portal/orders" },
    { label: "Saved Locations", path: "/portal/locations" },
    { label: "Profile", path: "/portal/profile" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
      >
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold">Customer Portal</h1>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 rounded bg-red-600 text-white mt-4 hover:bg-red-700"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        {/* Top bar */}
        <div className="bg-white shadow p-4 flex items-center justify-between md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 font-semibold"
          >
            ☰ Menu
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default PortalLayout;
