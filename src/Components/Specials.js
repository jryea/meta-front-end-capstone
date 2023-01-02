import React from 'react';
import Button from './Button';
import SpecialCard from './SpecialCard';
import special01 from '../images/Salad.png';
import special02 from '../images/Bruschetta.png';
import special03 from '../images/LemonDessert.png';

const specialsData = [
  {
    id: 1,
    image: special01,
    title: 'Greek salad',
    price: '$16.99',
    description:
      'The famous greek salad of crizpy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    image: special02,
    title: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 3,
    image: special03,
    title: 'Lemon dessert',
    price: '$4.99',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sources and is as authentic as can be imagined. ",
  },
];

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
    <section className='specials-section'>
      <div className='specials-section-header'>
        <h2 className='specials-title'>This weeks specials!</h2>
        <Button>Online Menu</Button>
      </div>
      <div className='specials-cards'>{specialsCards}</div>
    </section>
  );
}

export default Specials;
