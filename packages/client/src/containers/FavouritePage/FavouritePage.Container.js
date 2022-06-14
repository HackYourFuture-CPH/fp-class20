import React from 'react';
import './FavouritePage.Style.css';
import Navigation from '../../components/Navigation/Navigation.component';
import SortBy from '../../components/SortBy/SortBy.component';
import { Footer } from '../../components/Footer/Footer.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

const product = {
  id: 1,
  size: '250g glass jar',
  price: 350,
  name: 'Juniper Berries',
  description:
    'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
  pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
};

const textObj = { sidebar: 'Simply Spices / Favourites', main: 'Favourites' };
export const FavouritePage = () => {
  return (
    <>
      <Navigation className="toggle-button-bottom" />
      <SortBy textObj={textObj} />
      <div className="favourite-page-container">
        <div className="favourite-page-container-main">
          <ProductCard
            variant="small"
            className="favourite-item"
            product={product}
          />
          <ProductCard
            className="favourite-item"
            variant="small"
            product={product}
          />
          <ProductCard
            className="favourite-item"
            variant="small"
            product={product}
          />
          {/* <div className="favourite-item">1</div>
          <div className="favourite-item">2</div>
          <div className="favourite-item">3</div>
          <div className="favourite-item">4</div> */}
        </div>
      </div>

      <Footer className="text-big" />
    </>
  );
};
