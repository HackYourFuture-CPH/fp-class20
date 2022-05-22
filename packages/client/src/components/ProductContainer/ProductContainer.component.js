import React from 'react';
import './ProductContainer.styles.css';
import { SaveFavorite } from '../saveFavorite/SaveFavorite.component';
import { ProductImage } from '../productImage/ProductImage.component';
import { ProductTitleText } from '../productDetail/ProductTitleText.component';
import { Button } from '../Button.component';
// import { RadioButton } from '../RadioButton/RadioButton.component';

export const ProductContainer = () => {
  return (
    <div className="product-container">
      <div className="favorite-icon">
        <SaveFavorite />
      </div>
      <div className="product-detail">
        <div className="product-image">
          <ProductImage className="image-product" />
        </div>
        <div className="product-detail-right">
          <ProductTitleText />
          <div className="radio-button">
            {/* dummy radio buttons, here we will import radio button component */}
            <label>
              <input type="radio" value="value1" name="product-choose" />
              250g glass jar DKK 350.00
            </label>
            <label>
              <input type="radio" value="value2" name="product-choose" />
              100g flatpack DKK 300.00
            </label>
          </div>
          <div className="counter-cart-button">
            {/* These two Buttons are just dummy,  one for Counter component and another for Add to cart component 
              which are under development with other team mates. Once they are finalized, it will be placed here */}
            <Button label="- 1 +" className="counter-button" />
            <Button
              backgroundColor="green"
              label="Add to cart "
              className="cart-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
