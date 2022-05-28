import React from 'react';
import './Address.styles.css';
import map from '../../../../public/assets/vectors/vector_location.svg';

export const Address = () => {
  return (
    <div className="Address_info">
      <span className="simplySpices">Simply Spices</span>
      <div className="adress_text_logo">
        <img className="small_map_icon" src={map} alt="Canvas map Logo" />
        <p className="adress">
          Norrebrogade 666
          <br />
          2200 Norrebroz
          <br />
          Copenhagen
        </p>
      </div>
    </div>
  );
};
