import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const Auth: React.FC<{ children: any }> = ({ children }) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();

  return (
    <div>
      {isAuth ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default Auth;
