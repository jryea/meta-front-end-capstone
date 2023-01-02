import React from 'react';
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
        <Button>Reserve a table</Button>
        <img className='hero-image' src={heroImage} alt='waiter'></img>
      </section>
    </div>
  );
}

export default Hero;
