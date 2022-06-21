import React, { useState, useEffect } from 'react';
import './FavouritePage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';

const textObj = { sidebar: 'Simply Spices / Favourites', main: 'Favourites' };

export const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);

  useEffect(() => {
    async function fetchFavourites() {
      try {
        setIsLoading(true);
        const response = await fetch(`${getApiBaseUrl()}/api/favorites`);
        const favoritesJson = await response.json();
        setFavourites(favoritesJson);
        setIsLoading(false);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
        setIsLoading(false);
      }
    }

    fetchFavourites();
  }, []);

  const favouriteItems = favourites.map((favourite) => (
    <ProductCard
      className="favourite-item"
      variant="small"
      product={favourite}
      isFavorite={isFavorite}
      setIsFavorite={setIsFavorite}
    />
  ));
  return (
    <>
      <SortBy textObj={textObj} />
      <div className="favourite-page-container">
        {loading && <Preloader />}
        <div className="favourite-page-container-main">{favouriteItems}</div>
      </div>
    </>
  );
};