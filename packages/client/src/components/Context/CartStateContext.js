import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const CartStateContext = createContext({});
const CART_STATE_KEY = 'fp-cart-state';
export const CartStateProvider = ({ children }) => {
  const [cartState, setCartState] = useState(() => {
    return localStorage.getItem(CART_STATE_KEY);
  });
  function updateCartState(newCartState) {
    localStorage.setItem(CART_STATE_KEY, JSON.stringify(newCartState));
    setCartState(newCartState);
  }
  /* eslint-disable */
  const value = {
    cartState,
    updateCartState,
  };
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
};
CartStateProvider.defaultProps = {
  children: PropTypes.any,
};
CartStateProvider.propTypes = {
  children: PropTypes.func,
};
