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
    }
  };

  // eslint-disable-next-line no-return-assign
  return (
    <div className="carousel-container">
      {currentIndex >= 0 && (
        <ArrowLeftIcon className="left-arrow" onClick={prev} />
      )}
      <div className="carousel-inner">
        <div
          className={`show-${show} carousel`}
          style={
            {
              // transform: `translateX(-${currentIndex * (100 / show)}%)`,
              // transform: `translateX(-${currentIndex * 33}%)`,
            }
          }
        >
          {products
            .slice(currentIndex, currentIndex + show)
            // eslint-disable-next-line no-return-assign
            .map(({ picture, name, price }) => (
              <span className="carousel-content">
                <img src={picture} alt={name} style={{ width: '200px' }} />
                {name}
                {price}
              </span>
            ))}
        </div>
      </div>

      <ArrowRightIcon className="right-arrow" onClick={next} />
    </div>
  );
}

Carousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array,
  show: PropTypes.number,
};

Carousel.defaultProps = {
  products: [],
  show: 1,
};
