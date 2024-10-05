import { useSelector } from '../../hooks/selectorDispatch';
import { Navigate, useLocation } from "react-router-dom";
import { FC, ReactElement } from "react";

type ITypeProtected  = {
  onlyUnAuth: boolean;
  component: ReactElement;
}

export const Protected: FC<ITypeProtected> = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  const user = useSelector((store) => store.user.user);
  const location = useLocation();
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
