import React from 'react';
import TestimonialCard from './TestimonialCard';
import customer01 from '../images/Customer_01.png';
import customer02 from '../images/Customer_02.png';
import customer03 from '../images/Customer_03.png';
import customer04 from '../images/Customer_04.png';

const testimonialData = [
  {
    id: 1,
    image: customer01,
    name: 'Mark',
    quote:
      'I recently had the pleasure of dining at Little Lemon and was blown away by the amazing food and excellent service',
  },
  {
    id: 2,
    image: customer02,
    name: 'Joshua',
    quote:
      'From the moment we walked in, the atmosphere was welcoming and the staff were friendly and attentive.',
  },
  {
    id: 3,
    image: customer03,
    name: 'Lily',
    quote:
      'The menu had a great selection of dishes to choose from, and everything we ordered was cooked to perfection.',
  },
  {
    id: 4,
    image: customer04,
    name: 'Scott',
    quote:
      'Our server was knowledgeable about the menu and made great recommendations.',
  },
];

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
