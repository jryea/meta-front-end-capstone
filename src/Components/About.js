import React from 'react';
import Button from './Button';
import bottomImage from '../images/Restaurant_01.png';
import topImage from '../images/Restaurant_02.png';

function About() {
  return (
    <section className='about-section'>
      <p className='about-title'>Little Lemon</p>
      <p className='about-sub-title'>Chicago</p>
      <p className='about-description'>
        Our restaurant, "Little Lemon," is a cozy and inviting spot that serves
        up a wide variety of dishes for breakfast, lunch, and dinner. Our menu
        features a mix of classic comfort foods and international flavors, all
        made with fresh, high-quality ingredients. Whether you're in the mood
        for a hearty breakfast sandwich, a flavorful salad, or a classic burger
        and fries, you'll find something to satisfy your cravings at The
        Delicious Deli. So come on in and give us a try – we can't wait to serve
        you.
      </p>
      <div className='about-images'>
        <img className='about-bottom-image' src={bottomImage} />
        <img className='about-top-image' src={topImage} />
      </div>
    </section>
  );
}

export default About;
