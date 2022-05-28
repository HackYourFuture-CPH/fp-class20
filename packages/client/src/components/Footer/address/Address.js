import React from 'react';
import './Address.styles.css';
import map from '../../../../public/assets/vectors/vector_location.svg';

export const Address = () => {
  return (
    <div className="Address_info">
      <h2 className="simply_spices_text">Simply Spices</h2>
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
