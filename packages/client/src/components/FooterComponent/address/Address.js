import React from 'react';
import './Address.styles.css';
// import simplySpices from '../../../../public/assets/SimplySpices.png';
import map from '../../../../public/assets/mapLogo.png';

export const Address = () => {
  return (
    <div className="Address_info">
      <span className="simplySpices">Simply Spices</span>
      <div className="adress_text_logo">
        <img className="smallMapIcon" src={map} alt="Canvas map Logo" />
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