import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Icons
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
];

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openMgmt, setOpenMgmt] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("adminDarkMode") === "true");

  const navigate = useNavigate();
  const location = useLocation();

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
