import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import { useSearchParams } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import Preloader from '../../components/Preloader/Preloader.component';

export const SearchedProducts = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchedProductIsLoading, setLoading] = useState(true);
  const [searchedProductsError, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchedName = searchParams.get('name');

  useEffect(() => {
    const nameReg = /^[A-Za-z]*$/;
    if (searchedName !== undefined && nameReg.test(searchedName)) {
      fetch(`${getApiBaseUrl()}/api/products?name=${searchedName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('something went wrong');
          }
          return response.json();
        })
        .then((productTodisplay) => {
          setSearchedProducts(productTodisplay);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }
  }, [searchedName]);

  if (searchedProductIsLoading) {
    return <Preloader />;
  }
  if (searchedProductsError) {
    <div>{searchedProductsError}</div>;
  }
  return (
    <ul className="product-lists">
      {searchedProducts.map((product) => (
        <li>
          <ProductCard product={product} variant="small" />
        </li>
      ))}
    </ul>
  );
};

SearchedProducts.propTypes = {};

SearchedProducts.defaultProps = {};
