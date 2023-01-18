import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const logo = require('../images/Asset 16@4x.png');

function Header() {
  return (
    <header id='home'>
      <Link to='/'>
        <img src={logo} className='header-logo' />
      </Link>
      <Nav></Nav>
    </header>
  );
}

export default Header;
