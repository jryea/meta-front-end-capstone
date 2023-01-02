import React from 'react';
import cart from '../images/Cart.svg';

function SpecialCard({ image, title, price, description }) {
  return (
    <div className='special-card'>
      <img src={image} className='special-card-image' />
      <div className='special-card-content'>
        <div className='special-card-title'>
          <h4 className='special-card-title-name'>{title}</h4>
          <h5 className='special-card-title-price'>{price}</h5>
        </div>
        <p className='special-card-description'>{description}</p>
        <div className='special-card-order'>
          <p className='special-card-order-text'>Order a delivery</p>
          <img className='cart' src={cart} alt='cart' />
        </div>
      </div>
    </div>
  );
}

export default SpecialCard;
