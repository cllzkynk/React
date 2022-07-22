import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "../store";

const ProtectedRoute = ({ children, isAdmin }) => {
  const { userState } = useStore();
  const { isUserLogin, user } = userState;

  if (!isUserLogin) return <Navigate to="/auth"/>
  if(isAdmin && !user.roles.includes("Administrator")) return <Navigate to="/unauthorized"/>

  return children;

};

export default ProtectedRoute;
