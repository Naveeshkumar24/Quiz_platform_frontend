import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  adminOnly = false,
}) => {
  const { user } = useSelector(
    (state) => state.auth
  );

  // Not Logged In
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Admin Only Check
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;