import React from 'react';
import './LandingSortBy.styles.css';
import SortBy from './SortByComponent/SortBy.component';

export const LandingSortBy = () => {
  return (
    <div className="LandingSortByComponent_info">
      <span className="text_samll">Simply Spices / All Spices</span>
      <span className="text_big">All Spices</span>
      <div className="sort-by-container">
        <SortBy />
      </div>
    </div>
  );
};
