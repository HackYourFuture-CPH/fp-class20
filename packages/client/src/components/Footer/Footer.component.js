import React from 'react';
import './Footer.styles.css';
import { Corporate } from './Corporate/Corporate.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="Footer_info">
        <Corporate />
        <Contact />
        <Map />
        <Address />
      </div>
      <div className="copyright">
        <p>Copyright info...</p>
      </div>
    </div>
  );
};
