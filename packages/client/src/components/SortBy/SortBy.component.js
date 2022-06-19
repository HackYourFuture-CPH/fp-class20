import React, { useState } from 'react';
import './SortBy.styles.css';
import PropTypes from 'prop-types';

const SortBy = ({ textObj, setProducts, products }) => {
  const [arrow, setArrow] = useState(true);
  const [sortState, setSortState] = useState('none');

  // const sortMethods = {
  //   none: { method: (a, b) => null },
  //   alphabetically: { method: (a, b) => (a.name > b.name ? 1 : -1) },
  //   lowestPrice: {
  //     method: (a, b) => (Number(a.price) > Number(b.price) ? 1 : -1),
  //   },
  //   newArrivals: { method: (a, b) => (a.createdAt > b.createdAt ? -1 : 1) },
  // };

  const alphabetically = products.map((a, b) => (a.name > b.name ? 1 : -1));
  const lowestPrice = products.map((a, b) =>
    Number(a.price) > Number(b.price) ? 1 : -1,
  );
  const newArrivals = products.map((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1,
  );

  return (
    <div className="sort-by-component-background">
      <div className="sort-by-component-info">
        <span className="text-samll-sort-by">{textObj.sidebar}</span>
        <span className="text-big-sort-by">{textObj.main}</span>
        <div className="sort-by-container">
          <div className="sort-by-select">
            <div>
              <select
                value={sortState}
                onChange={(e) => {
                  setArrow(!arrow);
                  setSortState(e.target.value);
                }}
                className="select-sort-by"
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
                <option value="none">SORT BY :</option>
                <option
                  value="alphabetically"
                  onChange={() => {
                    setProducts(alphabetically);

                    // eslint-disable-next-line
                    console.log(products);
                  }}
                >
                  A - Z
                </option>
                <option
                  value="lowestPrice"
                  onChange={() => {
                    setProducts(lowestPrice);
                    // eslint-disable-next-line
                    console.log(products);
                  }}
                >
                  Lowest price
                </option>
                <option
                  value="newArrivals"
                  onChange={() => {
                    setProducts(newArrivals);
                    // eslint-disable-next-line
                    console.log(products);
                  }}
                >
                  New arrivals
                </option>
              </select>
              {
                // eslint-disable-next-line react/prop-types
                // setProducts(products.sort(sortMethods[sortState].method))
              }

              {/* <ul>
                {products.sort(sortMethods[sortState].method).map((el, i) => (
                  <li key={i.name}>{el.name}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;

SortBy.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  textObj: PropTypes.object,
  setProducts: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array,
};

SortBy.defaultProps = {
  textObj: {},
  setProducts: () => {},
  products: [],
};
