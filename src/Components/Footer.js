import React from 'react';
import footerImage from '../images/Restaurant_03.png';
import twitter from '../images/footer-twitter.svg';
import instagram from '../images/footer-instagram.svg';
import linkedIn from '../images/footer-linkedin.svg';
import facebook from '../images/footer-facebook.svg';

function Footer() {
  return (
    <div className='full-width-container'>
      <footer className='footer-section'>
        <div className='footer-nav-link-section'>
          <img className='footer-image' src={footerImage} />
          <div className='footer-nav-column'>
            <h3 className='footer-nav-heading'>Navigation</h3>
            <p className='footer-nav-link'>Home</p>
            <p className='footer-nav-link'>About</p>
            <p className='footer-nav-link'>Menu</p>
            <p className='footer-nav-link'>Reservations</p>
            <p className='footer-nav-link'>Order Online</p>
            <p className='footer-nav-link'>Login</p>
          </div>
          <div className='footer-nav-column'>
            <h3 className='footer-nav-heading'>Contact</h3>
            <p className='footer-nav-link'>Address</p>
            <p className='footer-nav-link'>Phone Number</p>
            <p className='footer-nav-link'>Email</p>
          </div>
          <div className='footer-nav-column'>
            <h3 className='footer-nav-heading'>Social Media Links</h3>
            <p className='footer-nav-link'>Twitter</p>
            <p className='footer-nav-link'>Instagram</p>
            <p className='footer-nav-link'>LinkedIn</p>
            <p className='footer-nav-link'>Facebook</p>
          </div>
        </div>
        <div className='line'></div>
        <div className='footer-info'>
          <p className='copyright'>
            &copy; 2023 Little Lemon. All rights reserved
          </p>
          <div className='footer-socials'>
            <img className='footer-icon' src={twitter} alt='twitter' />
            <img className='footer-icon' src={instagram} alt='twitter' />
            <img className='footer-icon' src={linkedIn} alt='twitter' />
            <img className='footer-icon' src={facebook} alt='twitter' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
