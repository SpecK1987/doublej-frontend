import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import CommandPalette from "./components/CommandPalette";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastProvider } from "./components/ToastProvider";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

import Login from "./pages/portal/Login";
import Orders from "./pages/portal/Orders";
import NewOrder from "./pages/portal/NewOrder";
import Profile from "./pages/portal/Profile";
import SavedLocations from "./pages/portal/SavedLocations";
import HomePortal from "./pages/portal/HomePortal";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/Orders";
import Drivers from "./pages/admin/Drivers";

// Ensure the root element exists before calling createRoot
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Root element with id "root" not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastProvider>
          <CommandPalette />
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

            {/* Portal auth */}
            <Route path="/portal/login" element={<Login />} />

            {/* Portal protected */}
            <Route
              path="/portal"
              element={
                <ProtectedRoute>
                  <HomePortal />
                </ProtectedRoute>
              }
            />
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
                <ProtectedRoute requireAdmin={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/drivers"
              element={
                <ProtectedRoute requireAdmin={true}>
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