import React from 'react';
import AvailableDates from './AvailableDates';
import AvailableTimes from './AvailableTimes';
import AvailableSeating from './AvailableSeating';

function BookTable() {
  return (
    <main className='main-section'>
      <AvailableDates />
      <AvailableTimes />
      <AvailableSeating />
    </main>
  );
}

export default BookTable;
