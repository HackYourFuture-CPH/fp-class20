import React from 'react';
import './LandingPage.Style.css';
import { MainSection } from '../../components/layout/mainSection/MainSection.Components.Layout.js';

export const LandingPage = () => {
  return (
    <div className="LandingPageContainer">
      <MainSection />
      <h1>Landing Page</h1>
    </div>
  );
};
