import React from 'react';
import { useState } from 'react';
import SectionKey from './SectionKey';
import Button from './Button';
import { timeData } from '../data';

function TimeButton({ children, handleClick, selected = false, available }) {
  return (
    <button
      className={`time-button ${selected ? 'time-button-selected' : ''} ${
        available ? '' : 'time-button-unavailable'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function AvailableTimes() {
  const [selected, setSelected] = useState('');

  function handleClick(button) {
    setSelected(button.time);
    console.log(selected);
  }
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
            return (
              <TimeButton
                key={button.id}
                selected={button.time === selected}
                available={button.available}
                handleClick={() => handleClick(button)}
              >
                {button.time}
              </TimeButton>
            );
          })}
        </div>
        <h4 className='time-category'>Lunch</h4>
        <div className='time-buttons-section'>
          {timeData.lunch.map((button) => {
            return (
              <TimeButton
                key={button.id}
                selected={button.time === selected}
                available={button.available}
                handleClick={() => handleClick(button)}
              >
                {button.time}
              </TimeButton>
            );
          })}
        </div>
        <h4 className='time-category'>Dinner</h4>
        <div className='time-buttons-section'>
          {timeData.dinner.map((button) => {
            return (
              <TimeButton
                key={button.id}
                selected={button.time === selected}
                available={button.available}
                handleClick={() => handleClick(button)}
              >
                {button.time}
              </TimeButton>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AvailableTimes;
