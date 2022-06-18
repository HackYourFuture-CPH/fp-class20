import React, { useState, useEffect } from 'react';
import './FavouritePage.Style.css';
import Navigation from '../../components/Navigation/Navigation.component';
import SortBy from '../../components/SortBy/SortBy.component';
import { Footer } from '../../components/Footer/Footer.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

const textObj = { sidebar: 'Simply Spices / Favourites', main: 'Favourites' };

export const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = async () => {
    try {
      const favouriteJson = await fetch('http://localhost:5000/api/favorites');
      const favoritesData = await favouriteJson.json();
      setFavourites(favoritesData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const favouriteItem = favourites.map((favourite) => (
    <ProductCard
      className="favourite-item"
      variant="small"
      product={favourite}
    />
  ));
  return (
    <>
      <Navigation className="toggle-button-bottom" />
      <SortBy textObj={textObj} />
      <div className="favourite-page-container">
        <div className="favourite-page-container-main">{favouriteItem}</div>
      </div>
      <Footer className="text-big" />
    </>
  );
};
