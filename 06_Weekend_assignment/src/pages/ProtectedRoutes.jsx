import React from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const accessToken = localStorage.getItem('accesstoken');

  return accessToken ? <Outlet /> : <div>Protected</div>;
};

export default ProtectedRoutes;
