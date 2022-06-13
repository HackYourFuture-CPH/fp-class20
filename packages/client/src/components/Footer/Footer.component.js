import React from 'react';
import './Footer.styles.css';
import { Corporate } from './Corporate/Corporate.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

const Footer = () => {
  return (
    <div className="whole-footer-container">
      <div className="footer-up-background">
        <div className="footer-up-container">
          <Corporate />
          <Contact />
          <Map />
          <Address />
        </div>
      </div>

      <div className="footer-down-background">
        <div className="footer-down-container">
          <p>Copyright info...</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
