import React from 'react';
import './Address.styles.css';
import map from '../../../../public/assets/vectors/vector_location.svg';

export const Address = () => {
  return (
    <div className="address-container">
      <div className="simply-spices-logo">Simply Spices</div>

      <div className="address-icon-text-small">
        <img className="coordinates-icon" src={map} alt="Canvas map Logo" />
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
