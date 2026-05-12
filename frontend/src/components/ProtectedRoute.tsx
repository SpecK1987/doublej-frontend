import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  requireAdmin = false,
}: {
  children: JSX.Element;
  requireAdmin?: boolean;
}) {
  // TODO: wire to real auth
  const isAuthenticated = true;
  const isAdmin = true;

  if (!isAuthenticated) return <Navigate to="/portal/login" replace />;
  if (requireAdmin && !isAdmin) return <Navigate to="/portal" replace />;

  return children;
}
