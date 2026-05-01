import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icons (same as before)
const IconDashboard = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" />
  </svg>
);

const IconOrders = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zM2 20c0-2.5 3.582-4.5 8-4.5s8 2 8 4.5" />
  </svg>
);

const IconLogout = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7M7 8v8" />
  </svg>
);

const navItems = [
  { to: "/admin", label: "Dashboard", icon: <IconDashboard /> },
  { to: "/admin/orders", label: "Orders", icon: <IconOrders /> },
  { to: "/admin/users", label: "Users", icon: <IconUsers /> },
];

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/portal/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800 relative">

      {/* MOBILE OVERLAY (fades in) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          bg-white border-r w-64 p-4 flex-shrink-0 fixed md:relative z-30 h-full
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white rounded-md w-10 h-10 flex items-center justify-center font-bold">
              AJ
            </div>
            <div>
              <div className="font-semibold">Admin</div>
              <div className="text-xs text-gray-500">Dashboard</div>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 text-sm font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              <span className="text-gray-500">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <IconLogout />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="text-lg font-semibold">Admin Console</div>
          </div>

          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded bg-red-600 text-white text-sm hover:bg-red-700"
          >
            Logout
          </button>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t px-4 py-3 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Your Company
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
