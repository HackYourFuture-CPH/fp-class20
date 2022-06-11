import React from 'react';
import Header from '../Header/Header.component';
// import Footer from '../Footer/Footer.component';
import { LandingSortBy } from '../LandingPageSortByPart/LandingSortBy.component';
import './BreadCrumb.styles.css';

export function BreadCrumb() {
  return (
    <>
      <div className="up-background-image display">
        <Header className="whole-container" />
      </div>
      <div className="landing-sort-by-background">
        <LandingSortBy className="landing-sort-by-component-info select" />
      </div>
      <div className="products-container">1</div>
      {/* <Footer /> */}
    </>
  );
}
