import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { pageLinks } from '../data';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/book'>Reservations</NavLink>
          <a href='#specials'>Order Online</a>
          <a href='#about'>About</a>
          <a href='/login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
