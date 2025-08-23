import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FullPageSpinner from "./FullPageSpinner";

function ProtectedRoute({ children }) {
  const { authenticated, login, initialized } = useAuth();

  if (!initialized) {
    return <FullPageSpinner />;
  }

  if (!authenticated) {
    login();
    return null;
  }

  return children;
}

export default ProtectedRoute;

