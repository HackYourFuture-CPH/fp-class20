import React, { useState } from 'react';
import './ProductComponent.styles.css';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter.component';
import { Button } from '../Button/Button.component';
// import heartEmpty from '../../../public/assets/vectors/vector_heart_empty.svg';
// import heartFull from '../../../public/assets/vectors/vector_heart_full.svg';
import { Modal } from '../Modal/Modal.component';

export const Product = ({ product, saveToFavorites }) => {
  const [count, setCount] = useState(1);
  const [isModalOpen, toggleModal] = useState(false);

  return (
    <div>
      <div className="product-container">
        <div className="favorite-icon">
          <div>
            <button type="button">
              Save to favorites
              <img
                // onClick={onAddToFavorites}
                // src={isFavorite ? 'heartFull' : 'heartEmpty'}
                alt="heart-icon"
              />
            </button>
          </div>
        </div>
        <div className="product-details">
          <div className="product-image">
            <img src={product.pictureUrl} alt="product-img" />
          </div>

          <div className="product-information">
            <div>
              <h2 className="product-name"> {product.name}</h2>
              <p className="product-info"> {product.description}</p>
            </div>
            <div>
              <span className="product-size">{product.size}</span>
              <span>{product.price} DKK</span>
            </div>
            <div className="counter-cart-button">
              <div className="counter-button">
                <Counter count={count} setCount={setCount} />
              </div>
              <Button
                label="ADD TO CART "
                type="addToCart"
                backgroundColor="#53742A"
                className="add-to-cart-button"
                onClick={() => {
                  toggleModal(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="confirmation-modal">
          <Modal
            closeModal={() => toggleModal}
            productImage={product.pictureUrl}
            productName={product.name}
            count={count}
            price={product.price}
          />
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.object,
  saveToFavorites: PropTypes.string,
};

Product.defaultProps = {
  product: {},
  saveToFavorites: null,
};
