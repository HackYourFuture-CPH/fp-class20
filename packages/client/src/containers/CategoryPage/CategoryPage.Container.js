import React from 'react';

import Footer from '../../components/Footer/Footer.component';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';

const textObj = {
  sidebar: 'Simply Spices / Spices by plant part / Berries and Fruit',
  main: 'Berries and Fruit',
};

export const CategoryPage = () => {
  return (
    <>
      <SortBy textObj={textObj} />
      <div className="category-page">
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
      </div>
      <Footer className="text-small text-big" />
    </>
  );
};
