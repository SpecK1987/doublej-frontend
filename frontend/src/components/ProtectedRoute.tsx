import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: Props) => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // Not logged in → send to login
  if (!token) {
    return <Navigate to="/portal/login" replace />;
  }

  // Logged in but not admin → block admin pages
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
