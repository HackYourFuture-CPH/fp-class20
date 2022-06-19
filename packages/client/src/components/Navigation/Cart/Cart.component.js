import React from 'react';

import PropTypes from 'prop-types';

import './Cart.styles.css';

// import CartIcon from '../../../../public/assets/vectors/vector_cart.svg';

const Cart = ({ label }) => {
  return (
    <div className="cart-container">
      <img
        className="cart-icon"
        src="assets/vectors/vector_cart.svg"
        alt="cart-icon"
      />
      <span className="number">0</span>
      <span className="cart-text">Cart</span>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  label: PropTypes.string.isRequired,
};