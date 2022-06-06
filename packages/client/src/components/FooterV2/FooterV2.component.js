import React from 'react';
import './FooterV2.styles.css';
import { Corporate } from './Corporate/Corporate.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

export const FooterV2 = () => {
  return (
    <div className="whole-footer-container">
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <Corporate />
          <Contact />
          <Map />
          <Address />
        </div>
      </div>

      <div className="copyright-outer-container">
        <div className="copyright-inner-container">
          <p>Copyright info...</p>
        </div>
      </div>
    </div>
  );
};
