import React from 'react';
import LandingSortBy from './LandingPageSortByPart/LandingSortBy.component';
import Footer from '../../components/Footer/Footer.component';
import './CategoryPage.Style.css';

const textObj = {
  sideBar: 'Simply Spices / Spices by plant part / Berries and Fruit',
  main: 'Berries and Fruit',
};

export const CategoryPage = () => {
  return (
    <div className="category-page">
      <div className="sort-by-background">
        <LandingSortBy
          className="landing-sort-by-component-info select  text-big text-small"
          textObj={textObj}
        />
      </div>
      <div className="category-middle-main-background">
        <div className="category-middle-main-container">
          <div className="category-product-card-items">
            <div className="category-product-card-item">1</div>
            <div className="category-product-card-item">2</div>
          </div>
          <div className="category-product-card-items">
            <div className="category-product-card-item">1</div>
            <div className="category-product-card-item">2</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
