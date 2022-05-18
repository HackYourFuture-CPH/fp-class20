import React from 'react';
import PropTypes from 'prop-types';
import './ProductTitleText.styles.css';

export const ProductTitleText = ({ heading, info, ...props }) => {
  return (
    <div className="title-text">
      <h2 className="top">{heading}</h2>
      <p className="bottom"> {info}</p>
    </div>
  );
};

ProductTitleText.propTypes = {
  heading: PropTypes.string,
  info: PropTypes.string,
};

ProductTitleText.defaultProps = {
  heading: 'Juniper Berries',
  info: 'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
};
