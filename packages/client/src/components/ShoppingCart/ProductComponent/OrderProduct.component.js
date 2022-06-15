import React, { useState } from 'react';
import Counter from '../../Counter/Counter.component';
import '../ShoppingCart.styles.css';
import PropTypes from 'prop-types';

function OrderProduct({ data, getPrice }) {
  const [count, setCount] = useState(1);

  return (
    <div className="order-product">
      <div className="order-product-img">
        <img
          src="assets/images/spices_square/dried_juniper_berries.jpeg"
          alt="product"
        />
      </div>
      <div className="order-product-product-container">
        <h2 className="order-product-title">{data.name}</h2>
        <p>
          {' '}
          <span className="bold">packaging:</span> {data.size}g flatpack
        </p>
        <div className="shopping-cart-btns">
          <button type="button" className="order-product-btn">
            REMOVE ITEM
          </button>
        </div>
      </div>
      <div className="order-product-quantity">
        <div className="order-product-counter">
          <Counter count={count} setCount={setCount} />
        </div>
        <p className="order-product-price">{data.price} DKK</p>
        <p
          className="order-product-total bold"
          onChange={(e) => getPrice(data.price * count)}
        >
          {data.price * count} DKK
        </p>
      </div>
    </div>
  );
}

OrderProduct.defaultProps = {
  data: PropTypes.func,
  getPrice: PropTypes.func,
};

OrderProduct.propTypes = {
  data: PropTypes.func,
  getPrice: PropTypes.func,
};
export default OrderProduct;
