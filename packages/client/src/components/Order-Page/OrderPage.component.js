import React, { useState, useEffect } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart.component';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails.component';
import Carousel from '../Carousel/Carousel.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import './OrderPage.css';

function OrderPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch(`${getApiBaseUrl()}/api/orders`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

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
      <h1 className="order-page-title">Similar Products</h1>
      <Carousel items={data} show={3} className="carousel" />{' '}
    </div>
  );
}

export default OrderPage;
