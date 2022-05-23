import React, { useState } from 'react';
import './Triangle.styles.css';

export const Triangle = () => {
  // const { display, dropDown } = props;
  const [dropDown, setDropDown] = useState(true);

  const onHandlechange = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className="triangle-container">
      {dropDown ? (
        <span
          className="triangle_down"
          onClick={onHandlechange}
          aria-hidden="true"
        />
      ) : (
        <span
          className="triangle_up"
          onClick={onHandlechange}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

// Triangle.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   /**
//    * What background color to use
//    */

//   dropDown: PropTypes.bool,
//   display: PropTypes.func,
// };

// Triangle.defaultProps = {
//   dropDown: true,
//   display: undefined,
// };
