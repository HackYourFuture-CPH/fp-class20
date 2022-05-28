import React from 'react';
import './Contact.styles.css';
import phone from '../../../../public/assets/vectors/vector_receiver.svg';
import envelop from '../../../../public/assets/vectors/vector_envelope.svg';

export const Contact = () => {
  return (
    <div className="Contact_info">
      <h2 className="text_big ">Contact us</h2>
      <span className="text_small phone_text">
        <img className="phone_logo" src={phone} alt="Canvas phone Logo" />
        <span>+45 666 555</span>
      </span>
      <span className="text_small">
        <img className="envelop_logo" src={envelop} alt="Canvas envelop Logo" />
        <span>spice@kbh.dk</span>
      </span>
    </div>
  );
};
