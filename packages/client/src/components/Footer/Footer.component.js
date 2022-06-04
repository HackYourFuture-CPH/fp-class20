import React from 'react';
import './Footer.styles.css';
import { Corporate } from './Corporate/Corporate.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
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

export default Footer;
