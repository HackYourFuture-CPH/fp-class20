import React from 'react';
import PropTypes from 'prop-types';
import './ProductLists.css';
import { ProductCard } from '../ProductComponent/ProductCard.component';

export const ProductCards = ({ data }) => {
  return (
    <div className="product-lists">
      <ul>
        {data.map((d) => (
          <li>
            <ProductCard product={d} variant="small" />
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
