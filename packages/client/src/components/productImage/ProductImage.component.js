import React from 'react';
import PropTypes from 'prop-types';
import './ProductImage.styles.css';
import Image from '../../../public/assets/dried_juniper_berries.png';

export const ProductImage = ({ url, altText, ...props }) => {
  return <img src={url} alt={altText} {...props} />;
};

ProductImage.propTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
};

ProductImage.defaultProps = {
  url: Image,
  altText: 'fruit image1',
};
