import { useState, useEffect, useCallback } from "react";

// Command type
type Command = {
  name: string;
  description?: string;
  icon?: JSX.Element;
  category: string;
  action: () => void;
};

// Simple fuzzy scoring
function scoreMatch(text: string, query: string) {
  text = text.toLowerCase();
  query = query.toLowerCase();
  if (text.includes(query)) return 2;
  if (text.startsWith(query)) return 3;
  return 0;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  // Commands with categories + icons + descriptions
  const commands: Command[] = [
    // Navigation
    {
      name: "Go to Home",
      description: "Return to the main landing page",
      category: "Navigation",
      icon: <span>🏠</span>,
      action: () => (window.location.href = "/"),
    },
    {
      name: "Customer Portal",
      description: "Access customer dashboard and tools",
      category: "Navigation",
      icon: <span>👤</span>,
      action: () => (window.location.href = "/portal"),
    },
    {
      name: "Admin Dashboard",
      description: "Manage orders, drivers, and analytics",
      category: "Navigation",
      icon: <span>🛠️</span>,
      action: () => (window.location.href = "/admin"),
    },

    // Orders
    {
      name: "Create New Order",
      description: "Start a new delivery order",
      category: "Orders",
      icon: <span>➕</span>,
      action: () => alert("Order creation coming soon"),
    },
    {
      name: "Track Order",
      description: "Check the status of an existing order",
      category: "Orders",
      icon: <span>📦</span>,
      action: () => alert("Order tracking coming soon"),
    },

    // System
    {
      name: "Toggle Dark Mode",
      description: "Switch between light and dark themes",
      category: "System",
      icon: <span>🌙</span>,
      action: () => {
        document.documentElement.classList.toggle("dark");
      },
    },
    {
      name: "Reload App",
      description: "Refresh the entire application",
      category: "System",
      icon: <span>🔄</span>,
      action: () => window.location.reload(),
    },
  ];
  // ADMIN COMMANDS
{
  name: "Admin: Dashboard",
  description: "View analytics, KPIs, and system overview",
  category: "Admin",
  icon: <span>📊</span>,
  action: () => (window.location.href = "/admin"),
},
{
  name: "Admin: Manage Orders",
  description: "View, update, and assign delivery orders",
  category: "Admin",
  icon: <span>📦</span>,
  action: () => (window.location.href = "/admin/orders"),
},
{
  name: "Admin: Manage Drivers",
  description: "View driver list, status, and assignments",
  category: "Admin",
  icon: <span>🚚</span>,
  action: () => (window.location.href = "/admin/drivers"),
},
{
  name: "Admin: Manage Users",
  description: "View and manage customer accounts",
  category: "Admin",
  icon: <span>👥</span>,
  action: () => (window.location.href = "/admin/users"),
},
{
  name: "Admin: System Logs",
  description: "View backend logs and error reports",
  category: "Admin",
  icon: <span>📝</span>,
  action: () => alert("System logs UI coming soon"),
},
{
  name: "Admin: Settings",
  description: "Configure system settings and preferences",
  category: "Admin",
  icon: <span>⚙️</span>,
  action: () => (window.location.href = "/admin/settings"),
},
{
  name: "Admin: Maintenance Mode",
  description: "Temporarily disable customer access",
  category: "Admin",
  icon: <span>🛑</span>,
  action: () => alert("Maintenance mode coming soon"),
},
{
  name: "Admin: Restart Backend",
  description: "Trigger backend restart (placeholder)",
  category: "Admin",
  icon: <span>🔁</span>,
  action: () => alert("Backend restart coming soon"),
},
    
  // Fuzzy search
  const filtered = commands
    .map((cmd) => ({
      ...cmd,
      score: scoreMatch(cmd.name, query) + scoreMatch(cmd.description || "", query),
    }))
    .filter((cmd) => cmd.score > 0 || query.length === 0)
    .sort((a, b) => b.score - a.score);

  // Keyboard controls
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      // Open palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelected(0);
      }

      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((prev) => (prev + 1 < filtered.length ? prev + 1 : prev));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
      }

      if (e.key === "Enter") {
        e.preventDefault();
        filtered[selected]?.action();
        setOpen(false);
      }
    },
    [open, filtered, selected]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 z-50">
      <div className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-xl shadow-2xl overflow-hidden animate-fadeIn border border-gray-200 dark:border-gray-700">
        
        {/* Search Bar */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-3">
          <input
            autoFocus
            type="text"
            placeholder="Search commands…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            className="w-full p-3 outline-none text-lg bg-transparent text-gray-900 dark:text-gray-100"
          />
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto">
          {filtered.length === 0 && (
            <div className="p-4 text-gray-500 dark:text-gray-400 text-center">
              No matching commands
            </div>
          )}

          {filtered.map((
