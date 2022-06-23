import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.component';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails.component';
import Carousel from '../Carousel/Carousel.component';
import './OrderPage.css';

function OrderPage() {
  return (
    <div>
      <div className="order-page">
        <p className="order-page-path">
          Simply Spices / Shopping Cart and Delivery Details{' '}
        </p>
        <h1 className="order-page-title">Shopping Cart</h1>
      </div>
      <ShoppingCart />
      <h1 className="order-page-title">Contact and Delivary Details</h1>
      <DeliveryDetails />
      <Carousel />
    </div>
  );
}

export default OrderPage;
