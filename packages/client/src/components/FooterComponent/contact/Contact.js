import React from 'react';
import './Contact.styles.css';
import phone from '../../../../public/assets/vectors/vector_receiver.svg';
import envelop from '../../../../public/assets/vectors/vector_envelope.svg';

export const Contact = () => {
  return (
    <div className="Contact_info">
      <span className="text_big ">Contact us</span>
      <span className="text_small phone_text">
        <img src={phone} alt="Canvas phone Logo" className="phone" />
        <span>+45 666 555</span>
      </span>
      <span className="text_small">
        <img src={envelop} alt="Canvas envelop Logo" className="envelop" />
        <span>spice @ kbh.dk</span>
      </span>
    </div>
  );
};
