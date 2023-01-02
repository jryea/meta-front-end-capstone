import React from 'react';
import stars from '../images/stars.svg';

function TestimonialCard({ image, quote, firstName }) {
  return (
    <div className='testimonial-card'>
      <img src={image} className='testimonial-card-image' />
      <img src={stars} className='testimonial-card-stars' />
      <div className='testimonial-card-content'>
        <p className='testimonial-card-quote'>{quote}</p>
        <p className='testimonial-card-name'>- {firstName}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
