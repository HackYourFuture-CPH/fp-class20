import React from 'react';
import PropTypes from 'prop-types';
import './OptionsPack.styles.css';

export const OptionsPack = ({ price1, price2, setSelected }) => {
  return (
    <div className="radio-button">
      <div className="first-button">
        <input
          type="radio"
          value="250g glass jar"
          name="product"
          onClick={() => setSelected(price1)}
        />
        <div>
          <span className="first-button-value"> 250g glass jar</span>
          <span>{price1}</span>
        </div>
      </div>
      <div className="second-button">
        <input
          type="radio"
          value="100g flatpack"
          name="product"
          onClick={() => setSelected(price2)}
        />
        <div>
          <span className="second-button-value">100g flatpack</span>
          <span>{price2}</span>
        </div>
      </div>
    </div>
  );
};
OptionsPack.propTypes = {
  price1: PropTypes.string,
  price2: PropTypes.string,
  setSelected: PropTypes.func,
};

OptionsPack.defaultProps = {
  price1: null,
  price2: null,
  setSelected: () => {},
};
