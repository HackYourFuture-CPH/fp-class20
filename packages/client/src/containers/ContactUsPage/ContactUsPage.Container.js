import React from 'react';
import './ContactUsPage.Style.css';
import { ContactForm } from '../../components/form/contactForm/ContactForm.component.js';

export const ContactUsPage = () => {
  return (
    <div className="ContactUsPageContainer">
      <ContactForm />
    </div>
  );
};
