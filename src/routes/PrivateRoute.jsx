import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <Player
        autoplay
        loop
        src="https://lottie.host/5a9fe44a-82f2-4dde-9daf-3115b0faa56d/WJYZhhWQzx.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
