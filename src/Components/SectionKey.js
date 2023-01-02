import React from 'react';

function SectionKey({ type }) {
  return (
    <div className={`section-key ${type}`}>
      <div className='section-key-group'>
        <div className='section-key-box not-available' />
        <h4 className='section-key-text'>Not available</h4>
      </div>
      <div className='section-key-group'>
        <div className='section-key-box available' />
        <h4 className='section-key-text'>Available</h4>
      </div>
      <div className='section-key-group'>
        <div className='section-key-box selected' />
        <h4 className='section-key-text'>Selected</h4>
      </div>
    </div>
  );
}

export default SectionKey;
