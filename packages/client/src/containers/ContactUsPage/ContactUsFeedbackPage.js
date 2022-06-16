import React from 'react';
import './ContactUsPage.Style.css';
import Navigation from '../../components/Navigation/Navigation.component';
import { Footer } from '../../components/Footer/Footer.component';
import { ContactUsFeedback } from '../../components/ContactFeedback/ContactFeedback.component';

export const ContactUsFeedbackPage = () => {
  return (
    <div className="contact-us-page-container">
      <div className="contact-form-inpage">
        <Navigation className="toggle-button-bottom" /> <ContactUsFeedback />
      </div>

      <Footer className="text-big" />
    </div>
  );
};
