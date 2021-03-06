import React, { useState } from 'react';
import './SortBy.styles.css';
import PropTypes from 'prop-types';

const SortBy = ({ textObj, setSort, sort }) => {
  const [arrow, setArrow] = useState(true);

  return (
    <div className="sort-by-component-background">
      <div className="sort-by-component-info">
        <span className="text-samll-sort-by">{textObj.sidebar}</span>
        <span className="text-big-sort-by">{textObj.main}</span>
        <div className="sort-by-container">
          <div className="sort-by-select">
            <div>
              <select
                value={sort}
                onClick={() => setArrow(!arrow)}
                onChange={(e) => setSort(e.target.value)}
                className="select-sort-by"
              >
                <option value="" disabled defaultValue>
                  SORT BY
                </option>
                <option value="alphabetically">A - Z</option>
                <option value="Lowest price">Lowest price</option>
                <option value="New arrivals">New arrivals</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;

SortBy.propTypes = {
  textObj: PropTypes.shape({
    sidebar: PropTypes.string,
    main: PropTypes.string,
  }),
  setSort: PropTypes.func,
  sort: PropTypes.string,
};

SortBy.defaultProps = {
  textObj: {},
  setSort: () => {},
  sort: '',
};
