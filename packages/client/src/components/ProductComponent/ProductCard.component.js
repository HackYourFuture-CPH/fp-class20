import React, { useState } from 'react';
import './ProductCard.styles.css';
import './ProductCardVariant.styles.css';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter.component';
import { Button } from '../Button/Button.component';
import { ProductCardModal } from './ProductCardModal.component';
import { useParams } from 'react-router-dom';

export const ProductCard = ({ product, variant }) => {
  const [count, setCount] = useState(1);
  const [isModalOpen, toggleModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();

  const onAddToFavorites = async () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      const objToPost = {
        productId: product.id,
        userId: id,
      };

      // eslint-disable-next-line no-console
      console.log(objToPost);

      try {
        const config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objToPost),
        };
        const response = await fetch('/api/favorites', config);
        return response;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('catch:', error);
      }
    }
  };

  const heartIcon = isFavorite
    ? `assets/vectors/vector_heart_full.svg`
    : `assets/vectors/vector_heart_empty.svg`;

  if (variant === 'small') {
    return (
      <div className="product-container-variant">
        <div className="favorite-icon-variant">
          <img
            onClick={onAddToFavorites}
            src={heartIcon}
            alt="heart-icon"
            aria-hidden="true"
          />
        </div>
        <div className="product-details-variant">
          <div className="product-image-variant">
            <img src={product.pictureUrl} alt="product-img" />
          </div>

          <div className="product-information-variant">
            <div>
              <h2 className="product-name-variant"> {product.name}</h2>
            </div>
            <div>
              <span className="product-size-variant">{product.size}</span>
              <span className="product-size-variant">{product.price} DKK</span>
            </div>
            <div className="counter-cart-button-variant">
              <div className="counter-button-variant">
                <Counter count={count} setCount={setCount} />
              </div>
              <Button
                label="ADD TO CART "
                type="addToCart"
                backgroundColor="#53742A"
                className="add-to-cart-button-variant"
                onClick={() => {
                  toggleModal(true);
                }}
              />
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="confirmation-modal-variant">
            <ProductCardModal
              onClose={() => toggleModal(false)}
              productImage={`assets/${product.pictureUrl}`}
              productName={product.name}
              count={count}
              setCount={setCount}
              price={product.price}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="product-whole-container">
      <div className="product-container">
        <div className="favorite-icon">
          Save to favorites
          <img
            onClick={onAddToFavorites}
            src={heartIcon}
            alt="heart-icon"
            aria-hidden="true"
          />
        </div>
        <div className="product-details">
          <div className="product-image">
            <img src={`assets/${product.pictureUrl}`} alt="product-img" />
          </div>

          <div className="product-information">
            <div>
              <h2 className="product-name"> {product.name}</h2>
              <p className="product-info"> {product.description}</p>
            </div>
            <div>
              <span className="product-size">{product.size}g</span>
              <span className="product-size">{product.price} DKK</span>
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
        {isModalOpen && (
          <div className="confirmation-modal">
            <ProductCardModal
              onClose={() => toggleModal(false)}
              productImage={`assets/${product.pictureUrl}`}
              productName={product.name}
              count={count}
              setCount={setCount}
              price={product.price}
            />
          </div>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.func,
  variant: PropTypes.exact('small'),
};

ProductCard.defaultProps = {
  product: {},
  variant: null,
};
