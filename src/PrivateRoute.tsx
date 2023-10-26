import React from 'react';
import { Route, Outlet, Navigate } from 'react-router-dom';
import { useUser } from './Components/Context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/sign-in" />

};

export default PrivateRoute;
