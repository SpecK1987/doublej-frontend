import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

import Home from "./pages/Home";
import Services from "./pages/Services";
import PortalLogin from "./pages/portal/Login";
import Orders from "./pages/portal/Orders";
import NewOrder from "./pages/portal/NewOrder";
import AdminLogin from "./pages/admin/Login";
import AdminOrders from "./pages/admin/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/portal/Profile";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />

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

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute requireAdmin>
                <AdminOrders />
              </ProtectedRoute>
            }
          />
          <Route path="/portal/profile" element={
             <ProtectedRoute>
                <Profile />
             </ProtectedRoute>
           }
          />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
