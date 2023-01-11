import React from 'react';
import SectionKey from './SectionKey';
import Button from './Button';
import { timeData } from '../data';

function TimeButton({ children }) {
  return <button className='time-button'>{children}</button>;
}

function AvailableTimes() {
  return (
    <div className='full-width-container'>
      <section className='available-times-section'>
        <h3 className='available-times-subtitle'>Available Times</h3>
        <div className='available-times-key'>
          <SectionKey />
          <Button>Confirm Reservation</Button>
        </div>
        <div className='line-dark' />
        <h4 className='time-category'>Breakfast</h4>
        <div className='time-buttons-section'>
          {timeData.breakfast.map((button) => {
            console.log(button);
            return <TimeButton key={button.id}>{button.time}</TimeButton>;
          })}
        </div>
        <h4 className='time-category'>Lunch</h4>
        <div className='time-buttons-section'>
          {timeData.breakfast.map((button) => {
            console.log(button);
            return <TimeButton key={button.id}>{button.time}</TimeButton>;
          })}
        </div>
        <h4 className='time-category'>Dinner</h4>
        <div className='time-buttons-section'>
          {timeData.breakfast.map((button) => {
            console.log(button);
            return <TimeButton key={button.id}>{button.time}</TimeButton>;
          })}
        </div>
      </section>
    </div>
  );
}

export default AvailableTimes;
