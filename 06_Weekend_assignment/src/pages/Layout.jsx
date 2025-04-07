import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
