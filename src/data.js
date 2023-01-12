//Social imports
import twitter from './images/footer-twitter.svg';
import instagram from './images/footer-instagram.svg';
import linkedIn from './images/footer-linkedin.svg';
import facebook from './images/footer-facebook.svg';

//Specials imports
import special01 from './images/Salad.png';
import special02 from './images/Bruschetta.png';
import special03 from './images/LemonDessert.png';

//Testimonial imports
import customer01 from './images/Customer_01.png';
import customer02 from './images/Customer_02.png';
import customer03 from './images/Customer_03.png';
import customer04 from './images/Customer_04.png';

export const pageLinks = [
  { id: 1, href: '#top', text: 'Home' },
  { id: 2, href: '#top', text: 'Reservations' },
  { id: 3, href: '#specials', text: 'Order Online' },
  { id: 4, href: '#about', text: 'About' },
  { id: 5, href: '#top', text: 'Login' },
];

export const socialLinks = [
  { id: 1, href: 'https://twitter.com/', src: twitter, name: 'twitter' },
  {
    id: 2,
    href: 'https://www.instagram.com/',
    src: instagram,
    name: 'instagram',
  },
  { id: 3, href: 'https://www.linkedin.com/', src: linkedIn, name: 'linkedin' },
  { id: 4, href: 'https://www.facebook.com/', src: facebook, name: 'facebook' },
];

export const specialsData = [
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

export const testimonialData = [
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

//Calendar data
export const calendarData = [];

for (let i = 1; i <= 31; i++) {
  let isAvailable = false;
  if (Math.random() < 0.7) isAvailable = true;
  calendarData.push({ date: i, available: isAvailable });
}

for (let i = 1; i <= 4; i++) {
  calendarData.push({ date: '', available: false });
}

export const timeData = {
  breakfast: [
    { id: 1, time: '7:00 AM', available: true },
    { id: 2, time: '7:30 AM', available: true },
    { id: 3, time: '8:00 AM', available: false },
    { id: 4, time: '8:30 AM', available: false },
    { id: 5, time: '9:00 AM', available: true },
    { id: 6, time: '9:30 AM', available: false },
    { id: 7, time: '10:00 AM', available: true },
    { id: 8, time: '10:30 AM', available: true },
  ],
  lunch: [
    { id: 1, time: '11:00 AM', available: false },
    { id: 2, time: '11:30 AM', available: true },
    { id: 3, time: '12:00 PM', available: true },
    { id: 4, time: '12:30 PM', available: true },
    { id: 5, time: '1:00 PM', available: true },
    { id: 6, time: '1:30 PM', available: true },
    { id: 7, time: '2:00 PM', available: false },
    { id: 8, time: '2:30 PM', available: false },
  ],
  dinner: [
    { id: 1, time: '4:00 PM', available: true },
    { id: 2, time: '4:30 PM', available: true },
    { id: 3, time: '5:00 PM', available: true },
    { id: 4, time: '5:30 PM', available: false },
    { id: 5, time: '6:00 PM', available: true },
    { id: 6, time: '6:30 PM', available: true },
    { id: 7, time: '7:00 PM', available: false },
    { id: 8, time: '7:30 PM', available: true },
  ],
};
