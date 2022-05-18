import React, { useState } from 'react';
import './SaveFavorite.styles.css';
import heartIcon from '../assets/heart-icon.png';
import heartIcon1 from '../assets/heart_icon_white.png';

export const SaveFavorite = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div>
      <span>save to favorites</span>
      {!selected ? (
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

// import React from 'react';
// import './SaveFavorite.styles.css';
// import heartIcon from '../assets/heart-icon.png';

// export const SaveFavorite = () => {
//   return (
//     <div className="save-favorite">
//       <span>save to favorites</span>
//       <img src={heartIcon} alt="heart icon" />
//     </div>
//   );
// };

// ProductTitleText.propTypes = {
//   label: PropTypes.string,
// };

// ProductTitleText.defaultProps = {
//   label: 'save to favorite',
// };
