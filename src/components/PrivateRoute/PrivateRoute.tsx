import type { ComponentType } from "react";  // Importación tipo-only para ComponentType
import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: ComponentType<any>;  
}

export const PrivateRoute = ({ element: Element }: PrivateRouteProps) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Element />; 
};
