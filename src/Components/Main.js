import React from 'react';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Hero from './Hero';

function Main() {
  return (
    <main className='main-section'>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default Main;
