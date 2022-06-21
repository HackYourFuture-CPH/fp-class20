import React, { useState, useEffect } from 'react';
import Total from './Total/Total';
import './ShoppingCart.styles.css';
import OrderProduct from './ProductComponent/OrderProduct.component';

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [notes, setNotes] = useState([]);
  // const [count, setCount] = useState(1);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('add-to-cart'));
    if (savedNotes) {
      setProducts(savedNotes);
    }
  }, []);
  // eslint-disable-next-line no-shadow
  // const fetchUser = () => {
  //   fetch('http://localhost:5000/api/products/2', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setProducts(
  //         result.map((data) => ({
  //           ...data,
  //           count: 1,
  //         })),
  //       );
  //     });
  // };

  /* eslint-disable no-console */
  console.log(process.env.REACT_APP_API_BASE_URL);

  const addProductToCart = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return products;
      }),
    );
  };

  const removeProductFromCart = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count - 1,
          };
        }
        return products;
      }),
    );
  };

  const calculateTotal = () => {
    return products
      .map((product) => product.price * product.count)
      .reduce((a, b) => a + b, 0);
  };

  return (
    <div className="shopping-cart">
      <div>
        <div className="shopping-cart-container">
          <h1 className="shopping-cart-title">Shopping Cart</h1>
          <div className="shopping-cart-flex">
            <div>
              <p>Quantity</p>
              <p>Price</p>
              <p className="bold">Total DKK</p>
            </div>
          </div>
          {products.map((product) => (
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
            <button type="button" className="order-product-btn btn">
              CONTINUE SHOPPING
            </button>
            <div>
              <Total title="Subtotal" price={calculateTotal()} />
              <Total title="Delivery" price="10.00" />
              <Total title="Total" price={calculateTotal() + 10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
