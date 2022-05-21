import { React, useState } from 'react';
import './ProductChoose.css';

function ProductChoose({options}) {
  const [select, setSelect] = useState('');
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="ProductChoose">
      <ul>
      {options.map((option,i) => (
      <li key={i}>
        <label>
            <input
              type="radio"
              name="letter"
              value={option}
              checked={value === option}
              onChange={handleChange}
            />
            {option}
          </label>
        </li>))}
      </ul>
    </div>
  );
}

export default ProductChoose;