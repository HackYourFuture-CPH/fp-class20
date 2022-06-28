import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import { useSearchParams } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import Preloader from '../../components/Preloader/Preloader.component';
import './SearchedProducts.Style.css';

const nameReg = /^[A-Za-z ]*$/;

export const SearchedProducts = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchedName = searchParams.get('name');

  useEffect(() => {
    if (searchedName === undefined && !nameReg.test(searchedName)) {
      return;
    }

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
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [searchedName]);

  if (isLoading) {
    return <Preloader />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (searchedProducts.length === 0) {
    return <div className="empty-search">No products found</div>;
  }
  return (
    <ul className="product-lists searched-products-list">
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
