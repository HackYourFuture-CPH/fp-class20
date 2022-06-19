import React from 'react';

import './BottomNavigation.styles.css';

const BottomNavigation = () => {
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

export default BottomNavigation;
