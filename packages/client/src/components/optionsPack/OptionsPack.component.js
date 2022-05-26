import React from 'react';
import PropTypes from 'prop-types';
import './OptionsPack.styles.css';

export const OptionsPack = ({ select, setSelect, options }) => {
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="ProductChoose">
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <input
              type="radio"
              name="product"
              value={option.weight}
              onChange={handleSelect}
            />
            <label>
              <span className="product-weight">{option.weight}</span>
              <span>{option.price}</span>
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
  options: PropTypes.func,
};

OptionsPack.defaultProps = {
  select: () => {},
  setSelect: () => {},
  options: () => {},
};
