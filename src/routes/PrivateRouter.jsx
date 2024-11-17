/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRouter;
