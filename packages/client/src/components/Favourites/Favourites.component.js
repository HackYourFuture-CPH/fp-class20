import React from 'react';

import favouriteIcon from '../../../public/assets/vectors/vector_heart_empty.svg';

import './Favourite.styles.css';

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
