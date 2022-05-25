/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Pagination from './Pagination.js';
import { ProductCards } from './ProductCards.js';
import './ProductLists.css';
import PropTypes from 'prop-types';

function ProductListsContainer({ data, cardPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // get the current page data
  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const currentInfos = data.slice(indexOfFirstPost, indexOfLastPost);

  // change page

  const nextPage = (num1, num2) => {
    if (num1 === num2) {
      setCurrentPage(1);
    } else {
      setCurrentPage(num1 + 1);
    }
  };

  const previousPage = (num1, num2) => {
    if (num1 === 1) {
      setCurrentPage(num2);
    } else {
      setCurrentPage(num1 - 1);
    }
  };

  return (
    <div className="product-pages">
      <ProductCards data={currentInfos} />
      <div className="pagination-footer">
        <Pagination
          cardPerPage={cardPerPage}
          totalCards={data.length}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

ProductListsContainer.propTypes = {
  data: PropTypes.any,
  cardPerPage: PropTypes.number,
};
ProductListsContainer.defaultProps = {
  data: [],
  cardPerPage: 10,
};

export default ProductListsContainer;
