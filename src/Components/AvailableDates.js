import React from 'react';
import SectionKey from './SectionKey';
import Button from './Button';
import Calendar from './Calendar';

function AvailableDates() {
  return (
    <section className='available-dates-section'>
      <h2 className='available-dates-title'>Reserve a table</h2>
      <h3 className='available-dates-subtitle'>Available dates</h3>
      <div className='available-dates-key yellow'>
        <SectionKey />
        <Button>Confirm</Button>
      </div>
      <div className='line-dark' />
      <Calendar />
    </section>
  );
}

export default AvailableDates;
