import React from 'react';
import Counter from '../Counter/Counter';
import { Button } from '../Button/Button.component';
import './ProductModal.styles.css';
import { ProductTitleText } from '../productDetail/ProductTitleText.component';
import { ProductImage } from '../productImage/ProductImage.component';

export const ProductModal = () => {
  return (
    <div className="outer-container">
      <div className="main-container">
        <div className="close-modal">X</div>
        <div className="modal-container">
          <div className="title">
            <ProductTitleText heading="strawberry" />
          </div>
          <div>
            <ProductImage />
          </div>
          <Counter />
          <div>ADDED TO CART</div>
          <div className="total-info">
            There are <span className="total-item">10</span> items in your cart.
          </div>
          <div>Cart Subtotal: 500,70 DKK</div>
          <div className="buttons">
            <Button label="Continue Shopping" />
            <Button label="Add to cart" backgroundColor="green" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
