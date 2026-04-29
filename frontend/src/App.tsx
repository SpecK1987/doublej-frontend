import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePublic from "./pages/public/HomePublic";
import Login from "./pages/portal/Login";
import Register from "./pages/portal/Register";

import Home from "./pages/portal/Home";
import NewOrder from "./pages/portal/NewOrder";
import Orders from "./pages/portal/Orders";
import SavedLocations from "./pages/portal/SavedLocations";
import Profile from "./pages/portal/Profile";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/portal/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route path="/" element={<HomePublic />} />
        <Route path="/services" element={<div>Services Page Coming Soon</div>} />
        <Route path="/about" element={<div>About Page Coming Soon</div>} />
        <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />

        {/* Auth */}
        <Route path="/portal/login" element={<Login />} />
        <Route path="/portal/register" element={<Register />} />

        {/* Portal */}
        <Route
          path="/portal/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/new-order"
          element={
            <ProtectedRoute>
              <NewOrder />
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
          path="/portal/locations"
          element={
            <ProtectedRoute>
              <SavedLocations />
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

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
