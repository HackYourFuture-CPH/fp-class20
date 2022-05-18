import React from 'react';

import './Heading.styles.css';

import logoHeading from '../../../public/logoHeading.svg';

import logoStyle from '../../../public/logoStyle.svg';

export const Heading = () => {
  return (
    <div className="heading">
      <img src={logoHeading} alt="logo heading" className="logo" />
      <img src={logoStyle} alt="logo style" className="style" />
      <div className="aboutus-description">
        <h3 className="aboutheading">About us</h3>
        <div className="description">
          <p>
            Founded in 1990, the companty offers finest spices and herbs for
            superstar chefs everywhere.
          </p>{' '}
          <p>
            We are proud of our global network of farmers and distributors who
            keep delivering unparallelled quality.
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
