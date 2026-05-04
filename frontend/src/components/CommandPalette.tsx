import { useState, useEffect, useCallback } from "react";

type Command = {
  name: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  // Your commands (add as many as you want)
  const commands: Command[] = [
    {
      name: "Go to Home",
      action: () => (window.location.href = "/"),
    },
    {
      name: "Open Customer Portal",
      action: () => (window.location.href = "/portal"),
    },
    {
      name: "Open Admin Dashboard",
      action: () => (window.location.href = "/admin"),
    },
    {
      name: "Track Order",
      action: () => alert("Order tracking coming soon"),
    },
    {
      name: "Create New Order",
      action: () => alert("Order creation coming soon"),
    },
  ];

  // Fuzzy search
  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard shortcuts
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      // Open with CTRL+K or CMD+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelected(0);
      }

      if (!open) return;

      // Close with ESC
      if (e.key === "Escape") {
        setOpen(false);
      }

      // Navigate with Arrow Keys
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((prev) =>
          prev
