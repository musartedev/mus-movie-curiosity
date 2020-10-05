import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';
import Home from '../../pages/Home';

import '../../styles/components/Layout/index.styl';

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <SearchBox />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
