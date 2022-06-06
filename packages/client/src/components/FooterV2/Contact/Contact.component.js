import React from 'react';
import './Contact.styles.css';
import phone from '../../../../public/assets/vectors/vector_receiver.svg';
import envelope from '../../../../public/assets/vectors/vector_envelope.svg';

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="text-big ">Contact us</div>

      <div className="text-small">
        <img src={phone} alt="Canvas phone Logo" className="phone" />
        <span>+45 666 555</span>
      </div>

      <div className="text-small">
        <img src={envelope} alt="Canvas envelope Logo" className="envelope" />
        <span className="email-underline">spice @ kbh.dk</span>
      </div>
    </div>
  );
};
