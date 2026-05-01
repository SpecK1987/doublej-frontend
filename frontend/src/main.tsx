import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

// Public pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// Portal pages
import Login from "./pages/portal/Login";
import Orders from "./pages/portal/Orders";
import NewOrder from "./pages/portal/NewOrder";
import Profile from "./pages/portal/Profile";
import SavedLocations from "./pages/portal/SavedLocations";
import PortalHome from "./pages/portal/HomePortal";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/Orders";
import Drivers from "./pages/admin/Drivers";

// Route protection
import ProtectedRoute from "./components/ProtectedRoute";

// Toasts
import { ToastProvider } from "./components/ToastProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastProvider>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Portal Auth */}
            <Route path="/portal/login" element={<Login />} />

            {/* Portal Home / Dashboard */}
            <Route
              path="/portal"
              element={
                <ProtectedRoute>
                  <PortalHome />
                </ProtectedRoute>
              }
            />

            {/* Portal Protected */}
            <Route
              path="/portal/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />

            <Route
              path="/portal/orders/new"
              element={
                <ProtectedRoute>
                  <NewOrder />
                </ProtectedRoute>
              }
            />

            <Route
              path="/portal/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/portal/locations"
              element={
                <ProtectedRoute>
                  <SavedLocations />
                </ProtectedRoute>
              }
            />

            {/* Admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/drivers"
              element={
                <ProtectedRoute requireAdmin>
                  <Drivers />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </ToastProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
