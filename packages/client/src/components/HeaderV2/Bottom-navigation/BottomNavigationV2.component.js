import React from 'react';

import './BottomNavigationV2.styles.css';

export const BottomNavigationV2 = () => {
  return (
    <>
      <div className="text">
        <span>ABOUT US</span>
      </div>
      <div className="text">
        <span>CONTACT</span>
      </div>
      <div className="search-container">
        <input
          className="input-container"
          type="text"
          placeholder="| Search spices"
        />
      </div>
    </>
  );
};
