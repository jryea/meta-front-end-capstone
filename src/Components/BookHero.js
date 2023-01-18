import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import heroImage from '../images/Waiter.png';

function Hero() {
  return (
    <div className='full-width-container'>
      <section className='hero-section'>
        <p className='hero-title'>Little Lemon</p>
        <p className='hero-sub-title'>Chicago</p>
        <p className='hero-description'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to='/book' style={{ textDecoration: 'none' }}>
          <Button>Reserve a table</Button>
        </Link>
        <img className='hero-image' src={heroImage} alt='waiter'></img>
      </section>
    </div>
  );
}

export default Hero;
