import React from 'react';
import NavList from '../../common/NavList';
import { headerNav } from '../../../constants/Nav';

import Logo from '../../../assets/img/Logo.png';

import '../../../styles/components/Layout/Header.styl';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__brand">
        <img src={Logo} alt="Movie Curiosity Logo" />
      </div>
      <div className="Header__nav">
        <NavList navItems={headerNav} horizontal />
      </div>
    </header>
  );
};

export default Header;
