import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Auth: React.FC<{children: any}> = ({children}) => {
  const location = useLocation();
  const auth = false;

  return (
    auth ? children :
    <Navigate to="/login" state={{ from: location }} replace />
  );

}

export default Auth;