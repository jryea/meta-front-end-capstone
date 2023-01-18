import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

function NotFound() {
  return (
    <>
      <Header />
      <div className='full-width-container'>
        <div className='not-found'>
          <h1 className='not-found-title'>404</h1>
          <h2 className='not-found-subtitle'>Page Not Found</h2>
          <p className='not-found-text'>Oops, this page does not exist</p>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
