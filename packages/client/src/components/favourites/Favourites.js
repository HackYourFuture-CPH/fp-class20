import React from 'react';

import favouriteIcon from '../assets/Vector.png';

import './favourite.css';

const Favourites = () => {
  return (
    <div className="favourite">
      <a className="favourite-tag" href="#favoritepage">
        <img
          className="favourite-icon"
          src={favouriteIcon}
          alt="favourite-icon"
        />{' '}
        Favourites
      </a>
    </div>
  );
};
export default Favourites;
