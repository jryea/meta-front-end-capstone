import React from 'react';
import { pageLinks } from '../data';

function Nav() {
  return (
    <nav>
      <ul>
        {pageLinks.map((link) => {
          return (
            <li>
              <a key={link.id} href={link.href}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
