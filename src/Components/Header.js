import React from 'react';
import Nav from './Nav';

const logo = require('../images/Asset 16@4x.png');

function Header() {
  return (
    <header>
      <img src={logo} className='header-logo' />
      <Nav></Nav>
    </header>
  );
}

export default Header;
