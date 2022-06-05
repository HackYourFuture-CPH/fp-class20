import React from 'react';

import './BottomNavigation.styles.css';

export const BottomNavigation = () => {
  return (
    <div className="main-container">
      <div>
        <span>ABOUT US</span>
      </div>
      <div>
        <span>CONTACT</span>
      </div>
      <div className="search-container">
        <input
          className="input-container"
          type="text"
          placeholder="| Search spices"
        />
      </div>
    </div>
  );
};
