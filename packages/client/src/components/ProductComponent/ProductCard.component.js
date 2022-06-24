import React, { useContext, useState } from 'react';
import './ProductCard.styles.css';
import './ProductCardVariant.styles.css';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter.component';
import { Button } from '../Button/Button.component';
import { ProductCardModal } from './ProductCardModal.component';

export const ProductCard = ({ product, variant }) => {
  // CartStateContext should be imported when it is merged
  // I am just mockoing its value so it wont break things
  const CartStateContext = React.createContext([]);
  const [count, setCount] = useState(1);
  const [isModalOpen, toggleModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { cartState, updateCartState } = useContext(CartStateContext);

  const onAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  if (variant === 'small') {
    return (
      <div className="product-container-variant">
        <div className="favorite-icon-variant">
          <button type="button" onClick={onAddToFavorites}>
            {isFavorite ? (
              <img
                src="/assets/vectors/vector_heart_full.svg"
                alt="remove product from favorites"
              />
            ) : (
              <img
                src="/assets/vectors/vector_heart_empty.svg"
                alt="add product to favorites"
              />
            )}
          </button>
        </div>
        <a
          href={`/product/${product.id}`}
          target="_blank"
          rel="noreferrer"
          className="product-card-link"
        >
          <div className="product-details-variant">
            <div className="product-image-variant">
              <img src={product.pictureUrl} alt={`${product.name}`} />
            </div>

            <div className="product-information-variant">
              <div>
                <h2 className="product-name-variant"> {product.name}</h2>
              </div>
              <div>
                <span className="product-size-variant">{product.size}g</span>
                <span className="product-size-variant">
                  {product.price} DKK
                </span>
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
                    updateCartState([
                      ...cartState,
                      {
                        id: product.id,
                        quantity: count,
                        img: product.pictureUrl,
                        size: product.size,
                        name: product.name,
                        price: product.price,
                      },
                    ]);
                  }}
                />
              </div>
            </div>
          </div>
        </a>

        {isModalOpen && (
          <div className="confirmation-modal-variant">
            <ProductCardModal
              onClose={() => toggleModal(false)}
              productImage={product.pictureUrl}
              productName={product.name}
              count={count}
              amountOfProducts={cartState.length}
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
            {isFavorite ? (
              <img
                src="/assets/vectors/vector_heart_full.svg"
                alt="remove product from favorites"
              />
            ) : (
              <img
                src="/assets/vectors/vector_heart_empty.svg"
                alt="add product to favorites"
              />
            )}
          </button>
        </div>
        <div className="product-details">
          <div className="product-image">
            <img src={product.pictureUrl} alt={`${product.name}`} />
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
                  updateCartState([
                    ...cartState,
                    {
                      id: product.id,
                      quantity: count,
                      img: product.pictureUrl,
                      size: product.size,
                      name: product.name,
                      price: product.price,
                    },
                  ]);
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
              amountOfProducts={cartState.length}
            />
          </div>
        )}
      </div>
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
