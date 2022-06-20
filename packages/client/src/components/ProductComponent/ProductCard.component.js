import React, { useState } from 'react';
import './ProductCard.styles.css';
import './ProductCardVariant.styles.css';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter.component';
import { Button } from '../Button/Button.component';
import { ProductCardModal } from './ProductCardModal.component';

export const ProductCard = ({
  product,
  variant,
  isFavorite,
  setIsFavorite,
}) => {
  const [count, setCount] = useState(1);
  const [isModalOpen, toggleModal] = useState(false);

  const userId = 1;
  // eslint-disable-next-line
  const productID = product.id;
  const createdAt = new Date().toLocaleString();

  const postFavorite = async () => {
    const postFavoriteObj = {
      // eslint-disable-next-line
      userId: userId,
      // eslint-disable-next-line
      productID: productID,
      // eslint-disable-next-line
      createdAt: createdAt,
    };
    try {
      const fetchPost = await fetch('http://localhost:5000/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postFavoriteObj),
      });
      await fetchPost.json();
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const deleteFavorite = async (e) => {
    try {
      const fetchDelete = await fetch(
        `http://localhost:5000/api/favorites/${productID}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      await fetchDelete.json();
      // eslint-disable-next-line
      console.log(fetchDelete.json());
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  };

  const onAddToFavorites = async () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      postFavorite();
    } else {
      deleteFavorite();
    }
  };

  if (variant === 'small') {
    return (
      <div className="product-container-variant">
        <div className="favorite-icon-variant">
          <button type="button" onClick={onAddToFavorites}>
            <img
              onClick={onAddToFavorites}
              src={
                isFavorite
                  ? `/assets/vectors/vector_heart_full.svg`
                  : `/assets/vectors/vector_heart_empty.svg`
              }
              alt="heart-icon"
              aria-hidden="true"
            />
          </button>
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
              <span className="product-size-variant">{product.size}g</span>
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
              productImage={product.pictureUrl}
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
          <button type="button" onClick={onAddToFavorites}>
            <img
              onClick={onAddToFavorites}
              src={
                isFavorite
                  ? `/assets/vectors/vector_heart_full.svg`
                  : `/assets/vectors/vector_heart_empty.svg`
              }
              alt="heart-icon"
              aria-hidden="true"
            />
          </button>
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
              productImage={product.pictureUrl}
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
  product: PropTypes.shape({
    description: PropTypes.string,
    pictureUrl: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
  }),
  variant: PropTypes.string,
  isFavorite: PropTypes.bool,
  setIsFavorite: PropTypes.func,
};

ProductCard.defaultProps = {
  product: {},
  variant: null,
  setIsFavorite: {},
  isFavorite: false,
};
