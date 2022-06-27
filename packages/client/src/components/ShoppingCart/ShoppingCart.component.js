import React, { useContext } from 'react';
import Total from './Total/Total';
import './ShoppingCart.styles.css';
import OrderProduct from './ProductComponent/OrderProduct.component';
import { Link } from 'react-router-dom';
import { CartStateContext } from '../../Contexts/CartStateContext';

function ShoppingCart() {
  const { cartState, setCartState } = useContext(CartStateContext);

  const addProductToCart = (productId) => {
    setCartState(
      cartState.map((product) => {
        if (product.id === productId) {
          // eslint-disable-next-line
          console.log({ ...product });

          return [
            cartState.filter((prod) => product.id !== productId),
            {
              ...product,
              quantity: product.quantity + 1,
            },
          ];
        }
        return cartState;
      }),
    );
  };

  const removeProductFromCart = (productId) => {
    setCartState(
      cartState.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: Math.max(0, product.quantity - 1),
          };
        }
        return cartState;
      }),
    );
  };

  const calculateTotal = () => {
    return cartState
      .map((product) => product.price * product.quantity)
      .reduce((a, b) => a + b, 0);
  };

  // eslint-disable-next-line no-console
  console.log(cartState);

  return (
    <div className="shopping-cart">
      <div>
        <div className="shopping-cart-container">
          <div className="shopping-cart-flex">
            <div>
              <p>Quantity</p>
              <p>Price</p>
              <p className="bold">Total DKK</p>
            </div>
          </div>
          {cartState.map((product) => (
            <OrderProduct
              data={product}
              key={product.id}
              onAdd={() => {
                addProductToCart(product.id);
              }}
              onRemove={() => {
                removeProductFromCart(product.id);
              }}
            />
          ))}
          <div className="shopping-cart-total-btn">
            <Link to="/">
              <button type="button" className="order-product-btn btn">
                CONTINUE SHOPPING
              </button>{' '}
            </Link>
            <div>
              <Total title="Subtotal" price={calculateTotal()} />
              <Total title="Delivery" price={10.0} />
              <Total title="Total" price={calculateTotal() + 10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
