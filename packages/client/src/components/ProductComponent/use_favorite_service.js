import getApiBaseUrl from '../../utils/getApiBaseUrl';
import { useState, useEffect, useCallback } from 'react';

export function useFavoriteService(productId) {
  const [isFavorite, setIsFavorite] = useState(false);

  // userId would be used if there was a login system
  const userId = 1;

  const addAsFavorite1 = useCallback(async () => {
    const body = {
      userId,
      productId,
    };
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to add product as favorite');
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [productId]); // Copy from current PR,

  const removeFromFavorite = useCallback(async () => {
    try {
      const response = await fetch(
        `${getApiBaseUrl()}/api/favorites/${productId}`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        throw new Error('Failed to remove product from favorites');
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [productId]); // Copy from current PR

  useEffect(() => {
    fetch(`${getApiBaseUrl()}/api/favorites/1`)
      .then((response) => response.json())
      .then((data) => {
        setIsFavorite(data.isFavorite);
        // eslint-disable-next-line no-console
        console.log('this is hook data', data);
      });
    // eslint-disable-next-line no-console
    console.log('this is own hook', productId);
  }, [productId]);

  const updateFavoriteStatus = useCallback(
    (shouldBeFavorite) => {
      if (shouldBeFavorite) {
        addAsFavorite1();
        setIsFavorite(false);
      } else {
        removeFromFavorite();
        setIsFavorite(true);
      }
    },
    [addAsFavorite1, removeFromFavorite],
  );

  return {
    isFavorite,
    updateFavoriteStatus,
  };
}
