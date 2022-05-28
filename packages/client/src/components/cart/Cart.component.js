import React from 'react';

import PropTypes from 'prop-types';

import './Cart.styles.css';

import CartIcon from '../../../public/assets/CartIcon.png';

const Cart = ({ label, onClick }) => {
  return (
    <div className="cart-container">
      <img className="cart-icon" src={CartIcon} alt="cart-icon" />
      <span className="number">0</span>
      <span className="cart-text">Cart</span>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Cart.defaultProps = {
  onClick: () => {
    // eslint-disable-next-line
    console.log('button clicked');
  },
};
