import { useAuth0 } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <Loader2 className="mr-2 h-10 w-10 animate-spin" />
      </div>
    );

  if (isAuthenticated) return <Outlet />;

  return <Navigate to="/" replace />;
}
