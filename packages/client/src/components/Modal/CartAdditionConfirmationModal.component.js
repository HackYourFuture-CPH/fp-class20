import React from 'react';
import { Button } from '../Button/Button.component';
import './CartAdditionConfirmationModal.styles.css';
import PropTypes from 'prop-types';

export const CartAdditionConfirmationModal = ({
  onClose,
  productImage,
  productName,
  count,
  price,
  setCount,
}) => {
  return (
    <div className="modal-container">
      <div className="cancel-butt-container">
        <button
          type="button"
          onClick={() => onClose()}
          className="cancell-button"
        >
          X
        </button>
      </div>
      <div className="product-title">
        <span>{productName}</span>
      </div>
      <div className="product-image-modal">
        <img src={productImage} alt="product-img" />
        <span className="text">ADDED TO CART </span>
        <span className="text">
          There are
          <span className="count-item">
            {setCount((prevState) => {
              return prevState + count;
            })}
          </span>
          items in your Cart.
        </span>
        <span className="text">Card subtotal: {count * price} DKK </span>
      </div>

      <div className="modal-footer">
        <span className="continue-shopping-button">
          <Button label="Continue Shopping" onClick={() => onClose(false)} />
        </span>
        <span>
          <Button label="View Cart" backgroundColor="green" color="white" />
        </span>
      </div>
    </div>
  );
};
CartAdditionConfirmationModal.propTypes = {
  onClose: PropTypes.func,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
  setCount: PropTypes.func,
};

CartAdditionConfirmationModal.defaultProps = {
  onClose: () => {},
  productImage: null,
  price: 350,
  productName: 'product name',
  count: 1,
  setCount: () => {},
};
