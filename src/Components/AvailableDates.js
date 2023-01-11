import React from 'react';
import SectionKey from './SectionKey';
import Button from './Button';
import Calendar from './Calendar';

function AvailableDates() {
  return (
    <section className='available-dates-section'>
      <h3 className='available-dates-subtitle'>Available Dates</h3>
      <div className='available-dates-key'>
        <SectionKey />
        <Button>Confirm Reservation</Button>
      </div>
      <div className='line-dark' />
      <Calendar />
    </section>
  );
}

export default AvailableDates;
