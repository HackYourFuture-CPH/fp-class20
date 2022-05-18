import { React, useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
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
        className="decrement-quantity"
      >
        -
      </span>

      <span className="quantity">{count}</span>

      <span
        role="button"
        tabIndex={-1}
        onClick={increment}
        onKeyUp={increment}
        className="increment-quantity"
      >
        +
      </span>
      {count === -1 && setCount(0)}
    </div>
  );
}

export default Counter;
