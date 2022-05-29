import React from 'react';
import './Address.styles.css';
import map from '../../../../public/assets/vectors/vector_location.svg';

export const Address = () => {
  return (
    <div className="address-info">
      <span className="simply-spices">Simply Spices</span>
      <div className="adress-text-logo">
        <img className="small-map-icon" src={map} alt="Canvas map Logo" />
        <p className="adress">
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
