import React from 'react';
import Header from '../../components/Navigation/Header/Header.component';
import BottomNavigation from '../../components/Bottom-navigation/BottomNavigation.component';

import Footer from '../../components/Footer/Footer.component';
import SortBy from '../../components/LandingPageSortByPart/LandingSortBy.component';
import './CategoryPage.Style.css';

export const CategoryPage = () => {
  return (
    <div className="category-page-container">
      <Header />
      <BottomNavigation />
      <SortBy />
      <div className="category-footer">
        <Footer />
      </div>
    </div>
  );
};
