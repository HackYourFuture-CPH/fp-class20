import React, { createContext, useState, useMemo, useCallback } from 'react';

import PropTypes from 'prop-types';

export const CartStateContext = createContext([]);
const CART_STATE_KEY = 'fp-cart-state';

export const CartStateProvider = ({ children }) => {
  const [cartState, setCartState] = useState(() => {
    return JSON.parse(localStorage.getItem(CART_STATE_KEY) ?? '[]');
  });

  // const updateCartState = useCallback((newCartState) => {
  //   // eslint-disable-next-line
  //   // console.log(newCartState);

  //   // newCartState.reduce((a,b) => a.id === b.id ?)

  //   setCartState(newCartState);
  //   localStorage.setItem(CART_STATE_KEY, JSON.stringify(newCartState));
  //   // return localStorageValue ? JSON.parse(localStorageValue) : [];
  // }, []);

  const addToCart = useCallback(
    (newProduct) => {
      let productIsNew = true;

      const newCartState = cartState.map((item) => {
        if (item.id === newProduct.id) {
          productIsNew = false;
          return { ...item, quantity: item.quantity + newProduct.quantity };
        }

        return item;
      });

      if (productIsNew) {
        newCartState.push(newProduct);
      }

      setCartState(newCartState);

      localStorage.setItem(CART_STATE_KEY, JSON.stringify(newCartState));
    },
    [cartState],
  );

  const value = useMemo(
    () => ({
      cartState,
      addToCart,
    }),
    [cartState, addToCart],
  );

  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
};

CartStateProvider.defaultProps = {};
CartStateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
