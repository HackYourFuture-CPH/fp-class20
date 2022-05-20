import React from 'react';

import PropTypes from 'prop-types';

import './cart.styles.css';

import CartIcon from '../../../public/assets/CartIcon.png';

const Cart = ({ label, onClick }) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <img className="cart-icon" src={CartIcon} alt="cart-icon" />
        <span className="number">0</span> <span>Cart</span>
        {/* <button type="button" onClick={onClick}>
          {label}
        </button> */}
      </div>
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
