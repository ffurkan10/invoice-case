import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {jwt} = useSelector((state) => state.auth);
  
  if (jwt) {
    return <>{children}</>;
  }

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;