import React from 'react';
import './ContactUsPage.Style.css';
import Navigation from '../../components/Navigation/Navigation.component';
import { Footer } from '../../components/Footer/Footer.component';
import { ContactForm } from '../../components/Form/ContactForm/ContactForm.component';

export const ContactUsPage = () => {
  return (
    <div className="contact-us-page-container">
      <div className="contact-form-inpage">
        <Navigation className="toggle-button-bottom" /> <ContactForm />
      </div>

      <Footer className="text-big" />
    </div>
  );
};
