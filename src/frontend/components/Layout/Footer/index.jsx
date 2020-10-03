import React from 'react';

import '../../../styles/components/Layout/Footer.styl';

const Footer = () => {
  return (
    <footer className="Footer">
      <span>Made with</span>
      <span aria-label="love" role="img">
        💚
      </span>
      <span>from</span>
      <a
        href="https://github.com/musartedev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mariangélica Useche
      </a>
      <span>to</span>
      <a href="https://platzi.com/" target="_blank" rel="noopener noreferrer">
        Platzi
      </a>
    </footer>
  );
};

export default Footer;
