import React from 'react';
import PropTypes from 'prop-types';
import './OptionsPack.styles.css';

const options = [
  {
    weight: '250g glass jar',
    price: 'DKK 350',
  },
  {
    weight: '100g flat pack',
    price: 'DKK 100',
  },
];

export const OptionsPack = ({ select, setSelect }) => {
  return (
    <div className="ProductChoose">
      <ul>
        {options.map((option) => (
          <li>
            <label>
              <input
                type="radio"
                name="product"
                value={option.weight}
                onChange={(e) => setSelect(e.target.value)}
              />
              <span className="product-weight">{option.weight}</span>
              {option.price}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionsPack.propTypes = {
  select: PropTypes.func,
  setSelect: PropTypes.func,
};

OptionsPack.defaultProps = {
  select: () => {},
  setSelect: () => {},
};
