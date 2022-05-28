import React from 'react';

import favouriteIcon from '../../../public/assets/heartShapeVector.png';

import './Favourite.css';

const Favourites = () => {
  return (
    <div className="favourite-container">
      <img
        className="favourite-icon"
        src={favouriteIcon}
        alt="favourite-icon"
      />{' '}
      <span className="favourites-text">Favourites </span>
    </div>
  );
};
export default Favourites;
