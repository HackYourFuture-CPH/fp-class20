import React from 'react';

import './AboutUs.styles.css';

import logoStyle from '../../../public/assets/vectors/vector_logo_underline.svg';

export const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div>
        <h1 className="simple-spices-heading">Simply Spices</h1>
        <img
          src={logoStyle}
          alt="logo style"
          className="main-slogan-vector-style"
        />
      </div>
      <div className="about-us-description">
        <h3 className="about-heading">About us</h3>
        <div className="description">
          <p>
            Founded in 1990, the company offers finest spices and herbs for
            superstar chefs everywhere.
          </p>{' '}
          <p>
            We are proud of our global network of farmers and distributors who
            keep delivering unparalleled quality.
          </p>{' '}
          <p>
            We are committed to sustaining our core values: quality,
            sustainability and extraordinary flavour.
          </p>
        </div>
      </div>
    </div>
  );
};
