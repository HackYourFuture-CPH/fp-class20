import React, { useState } from 'react';
import './SortBy.styles.css';
// import arrowDown from '../../../../public/assets/vectors/vector_arrow_down.svg';
// import arrowUp from '../../../../public/assets/vectors/vector_arrow_up.svg';

const SortBy = () => {
  const [arrow, setArrow] = useState(true);
  return (
    <div className="sort-by-select">
      <div>
        <select
          onClick={() => setArrow(!arrow)}
          style={
            arrow
              ? {
                  backgroundImage: `url('assets/vectors/vector_arrow_down.svg')`,
                }
              : {
                  backgroundImage: `url('assets/vectors/vector_arrow_up.svg')`,
                }
          }
        >
          <option disabled selected>
            SORT BY :
          </option>
          <option value="alphabetically">A - Z</option>
          <option value="Lowest price">Lowest price</option>
          <option value="New arrivals">New arrivals</option>
        </select>
      </div>
    </div>
  );
};
export default SortBy;
