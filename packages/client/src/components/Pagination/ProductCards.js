import React from 'react';
import PropTypes from 'prop-types';
import './ProductLists.css';

export const ProductCards = ({ data, loading }) => {
  if (loading) {
    return <h2>loading ...</h2>;
  }

  return (
    <div className="product-lists">
      {data.map((d) => (
        <p key={d.id} className="product-cards">
          {d.id}
        </p>
      ))}
    </div>
  );
};

ProductCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  loading: PropTypes.any,
};
ProductCards.defaultProps = {
  data: [],
  loading: undefined,
};
