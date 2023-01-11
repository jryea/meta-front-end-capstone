import React from 'react';
import { useState } from 'react';
import SectionKey from './SectionKey';
import Button from './Button';
import { SmallSeating } from './Seating';

function AvailableSeating() {
  const [availability, setAvailability] = useState('available');
  const [selected, setSelected] = useState('not-selected');

  return (
    <section className='seating-section'>
      <h3 className='seating-subtitle'>Available Seating</h3>
      <div className='available-dates-key'>
        <SectionKey />
        <Button>Confirm Reservation</Button>
      </div>
      <div className='line-dark' />
      <div className='inner-seating-section'>
        <SmallSeating />
      </div>
    </section>
  );
}

export default AvailableSeating;
