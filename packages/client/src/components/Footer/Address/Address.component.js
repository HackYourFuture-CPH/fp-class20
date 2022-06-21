import React from 'react';
import './Address.styles.css';

export const Address = () => {
  return (
    <div className="address-info">
      <span className="simply-spices-text">Simply Spices</span>
      <div className="address-text-logo">
        <img
          className="small-map-icon"
          src="/assets/vectors/vector_location.svg"
          alt="Canvas map Logo"
        />
        <p className="address">
          Norrebrogade 666
          <br />
          2200 Norrebro
          <br />
          Copenhagen
        </p>
      </div>
    </div>
  );
};
