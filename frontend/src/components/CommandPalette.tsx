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
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
      Command Palette
    </div>
  );
}
