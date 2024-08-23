import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const Protected = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  const user = useSelector((store) => store.user.user);
  const location = useLocation();
  console.log(isAuthChecked);
  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user.email != null && user.name != null) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && user.email == null && user.name == null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return component;
};
