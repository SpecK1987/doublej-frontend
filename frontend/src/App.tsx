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

import PortalLayout from "./components/PortalLayout";
import ProtectedRoute from "./components/ProtectedRoute";

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
