import React from 'react';
import './Address.styles.css';
import simplySpices from '../../../public/assets/SimplySpices.png';
import map from '../../../public/assets/mapLogo.png';

export const Address = () => {
  return (
    <div className="Address_info">
      <div>
        <img
          src={simplySpices}
          alt="Canvas Logo"
          className="logoOfSimplySpices"
        />
      </div>

      {/* forth div botom part */}
      <div className="mapIn">
        {/* map logo and adress left map logo */}
        <div>
          <img className="smallMapIcon" src={map} alt="Canvas map Logo" />
        </div>
        {/* map logo and adress right part adress */}
        <div>
          <p className="adress">
            Norrebrogade 666
            <br />
            2200 Norrebro
            <br />
            Copenhagen
          </p>
        </div>
      </div>
    </div>
  );
};
