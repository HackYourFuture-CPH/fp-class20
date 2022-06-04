import React from 'react';
import { Button } from '../Button/Button.component';
import './CartAdditionConfirmationModal.styles.css';
import PropTypes from 'prop-types';

export const CartAdditionConfirmationModal = ({
  closeModal,
  productImage,
  productName,
  count,
  price,
}) => {
  return (
    <div className="modal-container">
      <div className="cancel-butt-container">
        <button
          type="button"
          onClick={() => closeModal()}
          className="cancell-button"
        >
          X
        </button>
      </div>
      <div className="product-title">
        <h4>{productName}</h4>
      </div>
      <div className="product-image-modal">
        <img src={productImage} alt="product-img" />
        <h5>ADDED TO CARD </h5>
        <h5>
          There are <span className="count-item">{count}</span> items in your
          card.
        </h5>
        <h5>Card subtotal: {count * price} DKK </h5>
      </div>

      <div className="modal-footer">
        <span className="continue-shopping-button">
          <Button label="Continue Shopping" onClick={() => closeModal(false)} />
        </span>
        <span>
          <Button label="View Cart" backgroundColor="green" color="white" />
        </span>
      </div>
    </div>
  );
};
CartAdditionConfirmationModal.propTypes = {
  closeModal: PropTypes.func,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
};

CartAdditionConfirmationModal.defaultProps = {
  closeModal: () => {},
  productImage: null,
  // eslint-disable-next-line react/default-props-match-prop-types
  PropTypes: '',
  count: 1,
  price: 350,
  productName: 'product name',
};
