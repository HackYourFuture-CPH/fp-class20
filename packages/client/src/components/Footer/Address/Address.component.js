import React from 'react';
import './Address.styles.css';
import map from '../../../../public/assets/vectors/vector_location.svg';

export const Address = () => {
  return (
    <div className="address-info">
      <span className="simply-spices-text">Simply Spices</span>
      <div className="address-text-logo">
        <img className="small-map-icon" src={map} alt="Canvas map Logo" />
        <span className="address">
          Norrebrogade 666
          <br />
          2200 Norrebro
          <br />
          Copenhagen
        </span>
      </div>
    </div>
  );
};
