import React from 'react';
import './Contact.styles.css';
// import phone from '../../../../public/assets/vectors/vector_receiver.svg';
// import envelop from '../../../../public/assets/vectors/vector_envelope.svg';

export const Contact = () => {
  return (
    <div className="contact-info">
      <span className="text-big ">Contact us</span>
      <span className="text-small phone-text">
        <img
          src="assets/vectors/vector_receiver.svg"
          alt="Canvas phone Logo"
          className="phone"
        />
        <span>+45 666 555</span>
      </span>
      <span className="text-small">
        <img
          src="assets/vectors/vector_envelope.svg"
          alt="Canvas envelop Logo"
          className="envelop"
        />
        <span>spice@kbh.dk</span>
      </span>
    </div>
  );
};
