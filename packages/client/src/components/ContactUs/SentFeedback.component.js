import React from 'react';

import './SentFeedback.styles.css';

import logoHeading from '../assets/Simply Spices.svg';

import logoStyle from '../assets/Vector 192.svg';

export const SentFeedback = () => {
  return (
    <div className="feedback-message-page">
      <img src={logoHeading} alt="logo heading" className="logo" />
      <img src={logoStyle} alt="logo style" className="style" />
      <div className="feedback-message">
        <p>Your message has been sent.</p>
        <h3>Thank you!</h3>
        <p>
          Your opinion matters to us and we will respond as soon as possible.
        </p>
      </div>
    </div>
  );
};
