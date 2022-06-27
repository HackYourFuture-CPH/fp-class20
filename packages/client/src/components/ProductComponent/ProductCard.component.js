/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import './ProductCard.styles.css';
import './ProductCardVariant.styles.css';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter.component';
import { Button } from '../Button/Button.component';
import { ProductCardModal } from './ProductCardModal.component';
import { useFavoriteService } from './use_favorite_service';
import { CartStateContext } from '../../Contexts/CartStateContext';

export const ProductCard = ({ product, variant }) => {
  const [count, setCount] = useState(1);
  const [isModalOpen, toggleModal] = useState(false);

  const { isFavorite, updateFavoriteStatus, error } = useFavoriteService(
    product.id,
  );

  const { addToCart } = useContext(CartStateContext);

  if (variant === 'small') {
    return (
      <div className="product-container-variant">
        <div className="favorite-icon-variant">
          <button
            type="button"
            onClick={() => updateFavoriteStatus(!isFavorite)}
          >
            <img
              src={
                isFavorite
                  ? `/assets/vectors/vector_heart_full.svg`
                  : `/assets/vectors/vector_heart_empty.svg`
              }
              alt="changing the favorite status"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="product-details-variant">
          <div className="product-image-variant">
            <img src={product.pictureUrl} alt={`${product.name}`} />
          </div>

          <div className="product-information-variant">
            <div>
              <a
                href={`/product/${product.id}`}
                rel="noreferrer"
                className="product-card-link"
              >
                <h2 className="product-name-variant"> {product.name}</h2>
              </a>
            </div>
            <div>
              <span className="product-size-variant">
                {product.size}g glass jar
              </span>

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
                onClick={() => addToCart({ ...product, quantity: count })}
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
              // amountOfProducts={cartState.length} // TODO: fix when cartState is fixed
              setCount={setCount}
              price={product.price}
            />
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }

  return (
    <div className="product-whole-container">
      <div className="product-container">
        <div className="favorite-icon">
          Save to favorites
          <button
            type="button"
            onClick={() => updateFavoriteStatus(!isFavorite)}
          >
            <img
              src={
                isFavorite
                  ? `/assets/vectors/vector_heart_full.svg`
                  : `/assets/vectors/vector_heart_empty.svg`
              }
              alt="changing the favorite status"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="product-details">
          <div className="product-image-large">
            <img src={product.pictureUrl} alt={`${product.name}`} />
          </div>

          <div className="product-information-large">
            <div>
              <a
                href={`/product/${product.id}`}
                rel="noreferrer"
                className="product-card-link"
              >
                <h2 className="product-name-large"> {product.name}</h2>
              </a>
              <p className="product-info-large"> {product.description}</p>
            </div>

            <div className="product-size-price">
              <span className="product-size-large">
                {product.size}g glass jar
              </span>
              <span className="product-size-large">{product.price} DKK</span>
            </div>
            <div className="counter-cart-button-large">
              <div className="counter-button-large">
                <Counter count={count} setCount={setCount} />
              </div>
              <Button
                label="ADD TO CART "
                type="addToCart"
                backgroundColor="#53742A"
                className="add-to-cart-button-large"
                onClick={() => addToCart({ ...product, quantity: count })}
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
              // amountOfProducts={cartState.length} // TODO: fix when cartstate is fixed
            />
          </div>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    pictureUrl: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
  }),
  variant: PropTypes.string,
};

ProductCard.defaultProps = {
  product: {},
  variant: null,
};
