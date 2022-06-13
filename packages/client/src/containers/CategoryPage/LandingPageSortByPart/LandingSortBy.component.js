import React from 'react';
import './LandingSortBy.styles.css';
import SortBy from './SortByComponent/SortBy.component';

const LandingSortBy = (textObj) => {
  return (
    <div className="landing-sort-by-component-info">
      <span className="text-samll">{textObj.textObj.sideBar}</span>
      <span className="text-big">{textObj.textObj.main}</span>
      <div className="sort-by-container">
        <SortBy />
      </div>
    </div>
  );
};

export default LandingSortBy;
