import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import PortalLogin from "./pages/portal/Login";
import Orders from "./pages/portal/Orders";
import NewOrder from "./pages/portal/NewOrder";
import Profile from "./pages/portal/Profile";
import SavedLocations from "./pages/portal/SavedLocations";

import AdminLogin from "./pages/admin/Login";
import AdminOrders from "./pages/admin/Orders";

import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/portal/login" element={<PortalLogin />} />
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

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />
          </Routes>
        </App>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
