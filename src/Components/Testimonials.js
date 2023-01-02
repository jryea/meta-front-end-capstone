import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonialData } from '../data';

function Testimonials() {
  const cards = testimonialData.map((card) => {
    return (
      <TestimonialCard
        // className='testimonial-card'
        key={card.id}
        image={card.image}
        firstName={card.name}
        quote={card.quote}
      />
    );
  });

  return (
    <div className='full-width-container'>
      <section className='testimonial-section'>
        <h3 className='testimonial-section-title'>Testimonials</h3>
        <div className='testimonial-section-cards'>{cards}</div>
      </section>
    </div>
  );
}

export default Testimonials;
