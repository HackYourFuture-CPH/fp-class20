import React from 'react';
import PropTypes from 'prop-types';
import './ProductLists.css';
import { AddProductToCart } from '../ProductComponent/AddProductToCart.component';

export const ProductCards = ({ data }) => {
  return (
    <div className="product-lists">
      <ul>
        {data.map((d) => (
          <li>
            <AddProductToCart product={d} variant="small" />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};
ProductCards.defaultProps = {
  data: [],
};
