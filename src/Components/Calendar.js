import React from 'react';
import { useState } from 'react';
import { calendarData } from '../data';

function ChangeMonthButton() {
  return <div className='change-month-button'></div>;
}

function CalendarBox({
  date,
  selected = false,
  handleClick,
  available = false,
}) {
  return (
    <div
      className={`calendar-box ${available ? '' : 'calendar-box-unavailable'} ${
        selected ? 'calendar-box-selected' : 'calendar-box-unselected'
      } `}
      onClick={handleClick}
    >
      <p className='calendar-box-date'>{date}</p>
    </div>
  );
}

function Calendar() {
  const [calendarDays, setCalendarDays] = useState(calendarData);
  const [selected, setSelected] = useState(0);

  function handleClick(item) {
    if (item.available) setSelected(item.date);
    console.log(item);
  }

  const calendarBoxes = calendarDays.map((item, index) => (
    <CalendarBox
      key={index}
      date={item.date}
      selected={item.date === selected}
      available={item.available}
      handleClick={() => handleClick(item)}
    />
  ));

  return (
    <div className='calendar-container'>
      <ChangeMonthButton />
      <div className='calendar'>{calendarBoxes}</div>
      <ChangeMonthButton />
    </div>
  );
}

export default Calendar;
