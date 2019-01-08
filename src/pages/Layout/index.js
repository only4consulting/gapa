import React from 'react';
import { NavMenu, Footer } from '../../components/'

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <NavMenu />
      <div style={{ flex: '1' }}>
        {children}
      </div>
      <Footer />
    </div >
  );
};

export default Layout;
