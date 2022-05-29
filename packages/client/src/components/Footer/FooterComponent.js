import React from 'react';
import './FooterComponent.styles.css';
import { Corporate } from './Corporate/Corporate';
import { Contact } from './Contact/Contact';
import { Map } from './Map/Map';
import { Address } from './Address/Address';

export const FooterComponent = () => {
  return (
    <div className="footer_container">
      <div className="FooterComponent_info">
        <Corporate />
        <Contact />
        <Map />
        <Address />
      </div>
      <div className="copy_right_text">
        <p>Copyright info...</p>
      </div>
    </div>
  );
};
