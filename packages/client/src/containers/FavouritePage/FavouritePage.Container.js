import React from 'react';
import './FavouritePage.Style.css';
import Navigation from '../../components/Navigation/Navigation.component';
import SortBy from '../../components/SortBy/SortBy.component';
import { Footer } from '../../components/Footer/Footer.component';

const textObj = { sidebar: 'Simply Spices / Favourites', main: 'Favourites' };
export const FavouritePage = () => {
  return (
    <>
      <Navigation className="toggle-button-bottom" />
      <SortBy textObj={textObj} />
      <div className="favourite-page-container">
        <div className="favourite-page-container-main">
          <div className="favourite-item">1</div>
          <div className="favourite-item">2</div>
          <div className="favourite-item">3</div>
          <div className="favourite-item">4</div>
        </div>
      </div>

      <Footer className="text-big" />
    </>
  );
};
