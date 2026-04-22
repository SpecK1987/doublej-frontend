import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin }: Props) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/portal/login" replace />;

  if (requireAdmin && role !== "admin") {
    return <Navigate to="/portal/orders" replace />;
  }

  return children;
}
