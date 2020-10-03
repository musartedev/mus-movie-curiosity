import React from 'react';

import PropTypes from 'prop-types';

import '../../../styles/components/common/NavList.styl';

const NavList = ({ navItems, horizontal }) => {
  return (
    <div className={`nav-list ${horizontal ? 'nav-list--horizontal' : ''}`}>
      <nav>
        <ul>
          {navItems.map(item => (
            <li className="nav-list__item" key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

NavList.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  horizontal: PropTypes.bool,
};

NavList.defaultProps = {
  navItems: [],
  horizontal: false,
};

export default NavList;
