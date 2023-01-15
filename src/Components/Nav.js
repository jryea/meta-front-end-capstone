import React from 'react';
import { Link } from 'react-router-dom';
import { pageLinks } from '../data';

function Nav() {
  return (
    <nav>
      <ul>
        {pageLinks.map((link) => {
          return (
            <li>
              <Link key={link.id} to={link.href}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
