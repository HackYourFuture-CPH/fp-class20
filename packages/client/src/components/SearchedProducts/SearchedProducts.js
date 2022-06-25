import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard } from '../ProductComponent/ProductCard.component';

export const SearchedProducts = ({
  searchedProducts,
  searchedProductIsLoading,
  searchedProductsError,
}) => {
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

SearchedProducts.propTypes = {
  searchedProducts: PropTypes.node,
  searchedProductIsLoading: PropTypes.bool,
  searchedProductsError: PropTypes.string,
};

SearchedProducts.defaultProps = {
  searchedProducts: [],
  searchedProductIsLoading: false,
  searchedProductsError: null,
};
