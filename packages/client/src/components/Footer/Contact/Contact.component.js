import React from 'react';
import './Contact.styles.css';
// import phone from '../../../../public/assets/vectors/vector_receiver.svg';
// import envelop from '../../../../public/assets/vectors/vector_envelope.svg';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="contact-info">
      <span className="text-big ">
        {' '}
        <Link to="/contact-us"> Contact us</Link>
      </span>
      <div className="text-small phone-text">
        <img
          src="assets/vectors/vector_receiver.svg"
          alt="Canvas phone Logo"
          className="phone"
        />
        <span>+45 666 555</span>
      </div>
      <div className="text-small">
        <img
          src="assets/vectors/vector_envelope.svg"
          alt="Canvas envelop Logo"
          className="envelop"
        />
        <span className="email-underline">spice @ kbh.dk</span>
      </div>
    </div>
  );
};
