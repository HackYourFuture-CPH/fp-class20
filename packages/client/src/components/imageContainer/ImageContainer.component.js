import React from 'react';
import PropTypes from 'prop-types';
import './ImageContainer.styles.css';
import fruitImage from '../../../public/assets/dried_juniper_berries.png';

export const ImageContainer = ({ url, altText, ...props }) => {
  return <img className="image-fruit" src={url} alt={altText} />;
};

ImageContainer.propTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
};

ImageContainer.defaultProps = {
  url: fruitImage,
  altText: 'fruit image1',
};
