import React from 'react';
import './LandingSortBy.styles.css';
import SortBy from './SortByComponent/SortBy.component';

const LandingSortBy = () => {
  return (
    <div className="landing-sort-by-component-info">
      <span className="text-samll">Simply Spices / All Spices</span>
      <span className="text-big">All Spices</span>
      <div className="sort-by-container">
        <SortBy />
      </div>
    </div>
  );
};

export default LandingSortBy;
