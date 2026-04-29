import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/portal/Home";
import NewOrder from "./pages/portal/NewOrder";
import Orders from "./pages/portal/Orders";
import SavedLocations from "./pages/portal/SavedLocations";
import Profile from "./pages/portal/Profile";
import Login from "./pages/portal/Login";
import Register from "./pages/portal/Register";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/portal/login" replace />;
  }
  return children;
};

const PublicHome = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Double J Gulf Services</h1>
      <p className="mb-4">
        Public homepage placeholder. We’ll build the full marketing site next.
      </p>
      <a
        href="/portal/login"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Go to Customer Portal
      </a>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public site */}
        <Route path="/" element={<PublicHome />} />

        {/* Auth */}
        <Route path="/portal/login" element={<Login />} />
        <Route path="/portal/register" element={<Register />} />

        {/* Portal (protected) */}
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
