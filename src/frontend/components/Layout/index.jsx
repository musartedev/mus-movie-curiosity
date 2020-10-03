import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../../styles/components/Layout/index.styl';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
