import React from 'react';
import './FooterV2.styles.css';
import { Corporate } from './Corporate/Corporate.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

export const FooterV2 = () => {
  return (
    <div className="whole-footer-container">
      <div className="footer-top-background">
        <div className="footer-top-content">
          <Corporate />
          <Contact />
          <Map />
          <Address />
        </div>
      </div>

      <div className="footer-bottom-background">
        <div className="footer-bottom-content">
          <p>Copyright info...</p>
        </div>
      </div>
    </div>
  );
};
