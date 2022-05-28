import React from 'react';
import './FooterComponent.styles.css';
import { Corporate } from './Corporate/Corporate.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

export const FooterComponent = () => {
  return (
    <div className="footer_container">
      <div className="FooterComponent_info">
        <Corporate />
        <Contact />
        <Map />
        <Address />
      </div>
      <div className="copyRight">
        <p>Copyright info...</p>
      </div>
    </div>
  );
};
