import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductCard } from '../ProductComponent/ProductCard.component';
// eslint-disable-next-line import/no-cycle
import { searchContext } from '../../App';

export const SearchedProducts = () => {
  const {
    foo: searchedProducts,
    searchedProductIsLoading,
    searchedProductsError,
  } = useContext(searchContext);
  // eslint-disable-next-line no-console
  console.log(searchedProducts);
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
