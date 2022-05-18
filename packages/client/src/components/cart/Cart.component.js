import React from 'react';

import './cart.styles.css';

import CartIcon from '../assets/CartIcon.png';

const Cart = () => {
  return (
    <div className="cart">
      <a className="cart-tag" href="#cartpage">
        <img className="cart-icon" src={CartIcon} alt="cart-icon" />{' '}
        <span className="number"> 0 </span> Cart
      </a>
    </div>
  );
};

export default Cart;
