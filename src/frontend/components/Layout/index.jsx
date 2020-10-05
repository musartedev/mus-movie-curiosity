import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';

import '../../styles/components/Layout/index.styl';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <SearchBox />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
