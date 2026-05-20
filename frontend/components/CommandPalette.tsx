import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Customer Portal", path: "/portal" },
  { label: "Admin Dashboard", path: "/admin" },
  { label: "Orders", path: "/portal/orders" },
  { label: "New Order", path: "/portal/orders/new" },
  { label: "Drivers", path: "/admin/drivers" },
];

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.target as HTMLElement).tagName !== "INPUT") {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-md mx-4">
        <div className="border-b dark:border-gray-700 px-3 py-2">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages…"
            className="w-full bg-transparent text-sm outline-none text-gray-800 dark:text-gray-100"
          />
        </div>
        <div className="max-h-64 overflow-y-auto text-sm">
          {filtered.length === 0 && (
            <div className="px-3 py-2 text-gray-500">No matches.</div>
          )}
          {filtered.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="px-3 py-2 text-[11px] text-gray-500 flex justify-between border-t dark:border-gray-700">
          <span>Type to search. Enter to go.</span>
          <span>/ to open • Esc to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
