import React from 'react';
import './SortBy.styles.css';
import Triangle from './Triangle/Triangle.component';

const textObj = {
  sidebar: 'Simply Spices / Spices by plant part / Berries and Fruit',
  main: 'Berries and Fruit',
};

const SortBy = (props) => {
  return (
    <div className="sort-by-component-background">
      <div className="sort-by-component-info">
        <span className="text-samll-sort-by">{textObj.sidebar}</span>
        <span className="text-big-sort-by">{textObj.main}</span>
        <div className="sort-by-container">
          <Triangle />
        </div>
      </div>
    </div>
  );
};

export default SortBy;
