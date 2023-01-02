import React from 'react';
import { useState } from 'react';
import { calendarData } from '../data';

function CalendarBox({ date, boxCondition, handleClick }) {
  return (
    <div className={`calendar-box-${boxCondition}`} onClick={handleClick}>
      <p className='calendar-box-date'>{date}</p>
    </div>
  );
}

console.log('test1...');

function Calendar() {
  const [calendarDays, setCalendarDays] = useState(calendarData);

  function handleClick(e) {
    if (e.target.className === 'calendar-box-available') {
      // console.log(e.target.className);
      const newCalendarDays = [];
    }
  }

  const calendarBoxes = calendarDays.map((item, index) => (
    <CalendarBox
      key={index}
      date={item.date}
      boxCondition={item.condition}
      handleClick={handleClick}
    />
  ));

  return <div className='calendar'>{calendarBoxes}</div>;
}

export default Calendar;
