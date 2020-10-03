import React from 'react';
import Header from './Header';

import '../../styles/components/Layout/index.styl';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
