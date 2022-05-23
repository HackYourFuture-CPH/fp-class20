import React from 'react';

import './ContactUsFeedback.styles.css';

import logoStyle from '../../../public/assets/logoStyle.svg';

export const ContactUsFeedback = () => {
  return (
    <div className="feedback-section">
      <div className="feedback-message-section">
        <div>
          <h1 className="simple-spices-heading">Simply Spices</h1>
          <img
            src={logoStyle}
            alt="logo style"
            className="main-slogan-vector-style"
          />
        </div>
        <div className="feedback-message">
          <div className="message">
            <p>Your message has been sent.</p>
            <p className="thank-you">Thank You!</p>
            <p>
              Your opinion matters to us and we will respond as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
