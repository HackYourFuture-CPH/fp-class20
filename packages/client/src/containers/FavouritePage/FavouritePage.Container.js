import React, { useState, useEffect } from 'react';
import './FavouritePage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import { sortFunction } from '../../components/SortBy/Utils/sortFunction';
import { useFavoriteService } from '../../components/ProductComponent/use_favorite_service';

const textObj = { sidebar: 'Simply Spices / Favourites', main: 'Favourites' };

export const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [sort, setSort] = useState('');
  const { isFavorite, updateFavoriteStatus } = useFavoriteService();

  useEffect(() => {
    async function fetchFavourites() {
      try {
        setIsLoading(true);
        const response = await fetch(`${getApiBaseUrl()}/api/favorites/1`);
        const favoritesJson = await response.json();
        setFavourites(favoritesJson);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    }
    fetchFavourites();
  }, []);

  const favouriteItems = sortFunction(favourites, sort).map((favourite) => (
    <ProductCard
      className="favourite-item"
      variant="small"
      product={favourite}
    />
  ));
  return (
    <>
      <SortBy textObj={textObj} sort={sort} setSort={setSort} />
      <div className="favourite-page-container">
        {loading && <Preloader />}
        <div className="favourite-page-container-main">{favouriteItems}</div>
      </div>
    </>
  );
};
