import React from 'react';
import { Link } from 'react-router-dom';
import NavList from '../../common/NavList';
import { headerNav } from '../../../constants/Nav';

import Logo from '../../../assets/img/Logo.png';

import '../../../styles/components/Layout/Header.styl';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__brand">
        <Link to="/">
          <img src={Logo} alt="Movie Curiosity Logo" />
        </Link>
      </div>
      <div className="Header__nav">
        <NavList navItems={headerNav} horizontal />
      </div>
    </header>
  );
};

export default Header;
