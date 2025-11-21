import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {/* Роутер будет вставлять нужную страницу */}
      </main>
    </>
  );
};

export default RootLayout;