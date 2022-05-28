import React from 'react';
import './FooterComponent.styles.css';
import { Corporate } from './corporate/Corporate';
import { Contact } from './contact/Contact';
import { Map } from './map/Map';
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
