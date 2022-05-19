import { React, useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(1);
  const decrement = () => {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <span
        role="button"
        tabIndex={0}
        onClick={decrement}
        onKeyUp={decrement}
        className="decrement-quantity-button"
      >
        -
      </span>

      <span className="quantity-button">{count}</span>

      <span
        role="button"
        tabIndex={-1}
        onClick={increment}
        onKeyUp={increment}
        className="increment-quantity-button"
      >
        +
      </span>
    </div>
  );
}

export default Counter;
