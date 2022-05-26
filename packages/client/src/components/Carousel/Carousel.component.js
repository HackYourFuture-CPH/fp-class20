import React, { useState } from 'react';
// import Product from '../../Helpers/CarouselHelper';
import './Carousel.styles.css';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Carousel({ products, coarse }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex < products.length - coarse) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
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
      {currentIndex >= 0 && (
        <ArrowBackIosIcon className="left-arrow" onClick={prev} />
      )}
      <div className="carousel-inner">
        <div
          className={`carousel-content show-${coarse}`}
          style={{
            // transform: `translateX(-${currentIndex * (100 / coarse)}%)`,
            transform: `translateX(-${currentIndex * 75}%)`,
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
      {currentIndex <= products.length - coarse && (
        <ArrowForwardIosIcon className="right-arrow" onClick={next} />
      )}
    </div>
  );
}

Carousel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.array,
  coarse: PropTypes.number,
};

Carousel.defaultProps = {
  products: [],
  coarse: 1,
};
