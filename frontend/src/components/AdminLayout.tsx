// src/components/AdminLayout.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const IconDashboard = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" />
  </svg>
);

const IconOrders = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zM2 20c0-2.5 3.582-4.5 8-4.5s8 2 8 4.5" />
  </svg>
);

const IconLogout = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7M7 8v8" />
  </svg>
);

type NavItem = {
  to: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: <IconDashboard /> },
  { to: "/admin/orders", label: "Orders", icon: <IconOrders /> },
  { to: "/admin/users", label: "Users", icon: <IconUsers /> },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/portal/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className={`bg-white border-r w-64 p-4 flex-shrink-0 transition-transform transform ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"} md:relative fixed md:top-0 md:left-0 z-30 h-full`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white rounded-md w-10 h-10 flex items-center justify-center font-bold">AJ</div>
            <div>
              <div className="font-semibold">Admin</div>
              <div className="text-xs text-gray-500">Dashboard</div>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

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

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setOpen((s) => !s)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="text-lg font-semibold">Admin Console</div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
              <div className="text-right">
                <div className="font-medium">Admin User</div>
                <div className="text-xs text-gray-500">admin@example.com</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded bg-red-600 text-white text-sm hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content area */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t px-4 py-3 text-sm text-gray-500">
          <div className="max-w-7xl mx-auto text-center">© {new Date().getFullYear()} Your Company</div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
