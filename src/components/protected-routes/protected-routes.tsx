import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { IStoreType } from "../../types/types";
import { FC, ReactElement } from "react";

type ITypeProtected  = {
  onlyUnAuth: boolean;
  component: ReactElement;
}

export const Protected: FC<ITypeProtected> = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector((store: IStoreType) => store.user.isAuthChecked);
  const user = useSelector((store: IStoreType) => store.user.user);
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
