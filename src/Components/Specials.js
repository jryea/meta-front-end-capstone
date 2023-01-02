import React from 'react';
import Button from './Button';
import SpecialCard from './SpecialCard';
import { specialsData } from '../data';

const specialsCards = specialsData.map((item) => (
  <SpecialCard
    image={item.image}
    title={item.title}
    price={item.price}
    description={item.description}
  />
));

function Specials() {
  return (
    <section id='specials' className='specials-section'>
      <div className='specials-section-header'>
        <h2 className='specials-title'>This weeks specials!</h2>
        <Button>Online Menu</Button>
      </div>
      <div className='specials-cards'>{specialsCards}</div>
    </section>
  );
}

export default Specials;
