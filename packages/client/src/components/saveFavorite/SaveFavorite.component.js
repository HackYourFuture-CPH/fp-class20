import React from 'react';
import './SaveFavorite.styles.css';
import heartIcon from '../../../public/assets/vectors/vector_heart_empty.svg';
import heartIcon1 from '../../../public/assets/vectors/vector_heart_full.svg';
import PropTypes from 'prop-types';

export const SaveFavorite = ({
  name,
  selectedIcon,
  setSelectedIcon,
  ...args
}) => {
  const handleClick = () => {
    setSelectedIcon(!selectedIcon);
  };
  return (
    <div>
      <span>save to favorites{name}</span>
      {!selectedIcon ? (
        <img
          onClick={handleClick}
          src={heartIcon}
          alt="heart icon"
          aria-hidden="true"
        />
      ) : (
        <img
          src={heartIcon1}
          onClick={handleClick}
          alt="heart icon selected"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

SaveFavorite.propTypes = {
  name: PropTypes.string,
  selectedIcon: PropTypes.func,
  setSelectedIcon: PropTypes.func,
};

SaveFavorite.defaultProps = {
  name: null,
  selectedIcon: () => {},
  setSelectedIcon: () => {},
};
