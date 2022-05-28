import React, { useState } from 'react';
import './Carousel.styles.css';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Carousel({ products, show }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < products.length - show) {
      setCurrentIndex((prevState) => prevState + show);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - show);
    }
  };

  return (
    <div
      className="carousel-container"
      style={{
        background:
          'linear-gradient(180deg, #231C16 0%, rgba(35, 28, 22, 0.75) 100%',
      }}
    >
      {currentIndex >= -1 && (
        <ArrowBackIosIcon className="left-arrow" onClick={prev} />
      )}
      <div className="carousel-inner">
        <div
          className={`carousel-content show-${show}`}
          style={{
            // transform: `translateX(-${currentIndex * (100 / coarse)}%)`,
            transform: `translateX(-${currentIndex * 33}%)`,
          }}
        >
          {products.map(({ picture, name, price }) => (
            <div style={{ background: picture }} className="product-container">
              <img
                src={picture}
                alt={picture}
                style={{ width: '200px', height: '200px' }}
              />
              <li>{name}</li>
              <li>{price}</li>
            </div>
          ))}
        </div>
      </div>
      {currentIndex <= products.length - 1 && (
        <ArrowForwardIosIcon className="right-arrow" onClick={next} />
      )}
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
