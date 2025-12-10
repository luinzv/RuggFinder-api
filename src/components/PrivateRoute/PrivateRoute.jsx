import { Navigate } from "react-router-dom"; 
import jwt_decode from "jwt-decode"; 

const PrivateRoute = ({ element: Element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />; 
  }

  try {
    const decoded = jwt_decode(token);  
    const currentTime = Date.now() / 1000; 

    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");  
      return <Navigate to="/login" />;  
    }
  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;  
  }

  return <Element />;
};

export default PrivateRoute;
