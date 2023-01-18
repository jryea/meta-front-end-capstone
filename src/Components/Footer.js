import React from 'react';
import { NavLink } from 'react-router-dom';
import { socialLinks, pageLinks } from '../data';
import footerImage from '../images/Restaurant_03.png';

function Footer() {
  return (
    <div className='full-width-container'>
      <footer className='footer-section'>
        <div className='footer-nav-link-section'>
          <img className='footer-image' src={footerImage} />
          <div className='footer-nav-column'>
            <h3 className='footer-nav-heading'>Navigation</h3>
            <NavLink to='/' className='footer-nav-link'>
              Home
            </NavLink>
            <NavLink to='/book' className='footer-nav-link'>
              Reservations
            </NavLink>
            <a href='#specials' className='footer-nav-link'>
              Order Online
            </a>
            <a href='#about' className='footer-nav-link'>
              About
            </a>
            <a href='/login' className='footer-nav-link'>
              Login
            </a>
          </div>
          <div className='footer-nav-column'>
            <h3 className='footer-nav-heading'>Contact</h3>
            <p className='footer-nav-link'>Address</p>
            <p className='footer-nav-link'>Phone Number</p>
            <p className='footer-nav-link'>Email</p>
          </div>
          <div className='footer-nav-column'>
            <h3 className='footer-nav-heading'>Social Media Links</h3>
            {socialLinks.map((link) => {
              return (
                <a
                  className='footer-nav-link'
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <p>{`${link.name[0].toUpperCase()}${link.name.substring(
                    1
                  )}`}</p>
                </a>
              );
            })}
          </div>
        </div>
        <div className='line-light'></div>
        <div className='footer-info'>
          <p className='copyright'>
            &copy; 2023 Little Lemon. All rights reserved
          </p>
          <div className='footer-socials'>
            {socialLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='footer-icon'
                >
                  <img className='footer-icon' src={link.src} alt={link.name} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
