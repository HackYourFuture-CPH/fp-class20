import React, { useState } from 'react';
import './SortBy.styles.css';

export const SortBy = () => {
  const [dropDown, setDropDown] = useState(true);

  const display = () => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };
  return (
    <>
      <div className="SortBy_item">
        <span className="sort_item">SORT BY</span>
        {/* show differnt triangel */}
        {dropDown ? (
          <span
            className="triangle_down"
            onClick={() => {
              display();
            }}
            aria-hidden="true"
          />
        ) : (
          <span
            className="triangle_up"
            onClick={() => {
              display();
            }}
            aria-hidden="true"
          />
        )}
      </div>
      {/* dispaly or not dispaly the sort list */}
      {!dropDown ? (
        <div className="sort_list">
          <span className="A_Z">A-Z</span>
          <span>Lowest price</span>
          <span>New arrivals</span>
          <span>Category</span>
        </div>
      ) : null}
    </>
  );
};
