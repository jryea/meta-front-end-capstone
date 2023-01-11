import React from 'react';

export function SmallSeating({ available, selected }) {
  return (
    <div className='small-seating'>
      <div className={`chair-top ${available} ${selected}`}></div>
      <div className={`inner-seating ${available} ${selected}`}>
        <div className={`chair-left ${available} ${selected}`}></div>
        <div className={`small-table ${available} ${selected}`}></div>
        <div className={`chair-right ${available} ${selected}`}>8</div>
      </div>
      <div className={`chair-bottom ${available} ${selected}`}></div>
    </div>
  );
}
