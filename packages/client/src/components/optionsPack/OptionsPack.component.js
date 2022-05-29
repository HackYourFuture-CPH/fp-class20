import React from 'react';
import PropTypes from 'prop-types';
import './OptionsPack.styles.css';

export const OptionsPack = ({
  selectPackage,
  setSelectPackage,
  options,
  currency,
  price,
}) => {
  const handlePackSelect = (e) => {
    setSelectPackage(e.target.value);
  };

  return (
    <div className="ProductChoose">
      <ul>
        {options.map((option) => (
          <>
            <li key={option.id}>
              <input
                type="radio"
                name="product"
                value={option.weight}
                onChange={handlePackSelect}
              />
              <label>
                <span className="product-weight">
                  {option.weightOne}g glass jar
                </span>
                <span>
                  {currency} {option.priceOne}
                </span>
              </label>
            </li>
            <li key={option.id}>
              <input
                type="radio"
                name="product"
                value={option.weightTwo}
                onChange={handlePackSelect}
              />
              <label>
                <span className="product-weight">
                  {option.weightTwo}g flatpack
                </span>
                <span>
                  {currency} {option.priceTwo}
                </span>
              </label>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

OptionsPack.propTypes = {
  selectPackage: PropTypes.func,
  setSelectPackage: PropTypes.func,
  options: PropTypes.func,
  currency: PropTypes.string,
  price: PropTypes.number,
};

OptionsPack.defaultProps = {
  selectPackage: () => {},
  setSelectPackage: () => {},
  options: () => {},
  currency: 'DKK',
  price: 0,
};
