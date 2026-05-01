import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import Login from "./pages/portal/Login";
import NewOrder from "./pages/portal/NewOrder";
import Orders from "./pages/portal/Orders";
import SavedLocations from "./pages/portal/SavedLocations";
import Profile from "./pages/portal/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Auth */}
        <Route path="/portal/login" element={<Login />} />

        {/* Portal Protected Routes */}
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
