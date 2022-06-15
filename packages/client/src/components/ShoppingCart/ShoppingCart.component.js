import React, { useState, useEffect } from 'react';
import Total from './Total/Total';
import { useParams } from 'react-router-dom';
import './ShoppingCart.styles.css';
import OrderProduct from './ProductComponent/OrderProduct.component';

function ShoppingCart() {
  const [data, setData] = useState([]);

  const getTotal = (price) => {
    // eslint-disable-next-line no-console
    console.log(price);
  };
  const { id } = useParams();
  useEffect(() => {
    fetchUser(id);
  }, [id]);
  // eslint-disable-next-line no-shadow
  const fetchUser = (id) => {
    fetch('http://localhost:5000/api/products', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
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
          {data.map((product) => (
            <OrderProduct data={product} key={product.id} getPrice={getTotal} />
          ))}
          <div className="shopping-cart-total-btn">
            <button type="button" className="order-product-btn btn">
              CONTINUE SHOPPING
            </button>
            <div>
              <Total title="Subtotal" price="1000.00" />
              <Total title="Delivery" price="10.00" />
              <Total title="Total" price="1000.00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
