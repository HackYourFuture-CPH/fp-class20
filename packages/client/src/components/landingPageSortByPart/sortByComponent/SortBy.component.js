import React, { useState } from 'react';
import './SortBy.styles.css';
import arrowDown from '../../../../public/assets/vectors/vector_arrow_down.svg';
import arrowUp from '../../../../public/assets/vectors/vector_arrow_up.svg';

const SortBy = () => {
  const [arrow, setArrow] = useState(true);
  return (
    <div className="SortBy_select">
      <div>
        <select
          onClick={() => setArrow(!arrow)}
          style={
            arrow
              ? {
                  backgroundImage: `url(${arrowDown})`,
                }
              : {
                  backgroundImage: `url(${arrowUp})`,
                }
          }
        >
          <option value="1">SORT BY :</option>
          <option value="2" disabled>
            {' '}
          </option>
          <option value="3" disabled>
            {' '}
          </option>
          <option value="A-Z">A - Z</option>
          <option value="Lowest price">Lowest price</option>
          <option value="New arrivals">New arrivals</option>
          <option value="4" disabled>
            {' '}
          </option>
          <option value="5" disabled>
            {' '}
          </option>
        </select>
        <span className="arrow" />
      </div>
    </div>
  );
};
export default SortBy;
