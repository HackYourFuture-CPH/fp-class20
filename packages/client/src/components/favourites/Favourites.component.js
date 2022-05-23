import React from 'react';

import favouriteIcon from '../../../public/assets/Vector.png';

import './favourite.css';

const Favourites = () => {
  return (
    <div className="favourite-container">
      <img
        className="favourite-icon"
        src={favouriteIcon}
        alt="favourite-icon"
      />{' '}
      <span>Favourites </span>
    </div>
  );
};
export default Favourites;
