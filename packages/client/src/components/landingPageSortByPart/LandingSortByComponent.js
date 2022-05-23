import React from 'react';
import './LandingSortByComponent.styles.css';
import { SortBy } from '../sortByComponent/SortBy';

export const LandingSortByComponent = () => {
  return (
    <div className="LandingSortByComponent_info">
      <span className="text_samll">Simply Spices / All Spices</span>
      <span className="text_big">All Spices</span>
      <SortBy />
    </div>
  );
};
