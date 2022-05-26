import React from 'react';
import PropTypes from 'prop-types';

export const ProductTitleText = ({ heading, info }) => {
  return (
    <div className="title-main">
      <h2 className="product-title">{heading}</h2>
      <p className="product-info"> {info}</p>
    </div>
  );
};

ProductTitleText.propTypes = {
  heading: PropTypes.string,
  info: PropTypes.string,
};

ProductTitleText.defaultProps = {
  heading: null,
  info: null,
};
