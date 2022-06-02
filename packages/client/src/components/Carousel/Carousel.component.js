import React, { useState } from 'react';
import './Carousel.styles.css';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowLeftIcon } from '../../../public/assets/vectors/vector_carousel_left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../public/assets/vectors/vector_carousel_right.svg';

export default function Carousel({ products, show }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < products.length - show) {
      setCurrentIndex(currentIndex + show);
    } else {
      setCurrentIndex(0);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - show);
    } else {
      setCurrentIndex(products.length - show);
    }
  };

  return (
    <div className="carousel-container">
      <ArrowLeftIcon className="left-arrow" onClick={prev} />

      <div className="carousel-inner">
        <div className={`show-${show} carousel`}>
          {products.slice(currentIndex, currentIndex + show).map((product) => (
            <span className="carousel-content">{product}</span>
          ))}
        </div>
      </div>
      <ArrowRightIcon className="right-arrow" onClick={next} />
    </div>
  );
}

Carousel.propTypes = {
  products: PropTypes.node,
  show: PropTypes.number,
};

Carousel.defaultProps = {
  products: [],
  show: 1,
};
