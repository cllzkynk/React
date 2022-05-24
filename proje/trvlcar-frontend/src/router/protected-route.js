import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../store";

const ProtectedRoute = ({ children }) => {
  const { userState } = useStore();
  const { isUserLogin } = userState;

  if (!isUserLogin) return <Navigate to="/auth"/>

  return children;

};

export default ProtectedRoute;
