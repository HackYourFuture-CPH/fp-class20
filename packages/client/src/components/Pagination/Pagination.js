import React from 'react';
import './ProductLists.css';
import PropTypes from 'prop-types';

function Pagination({ currentPage, pageCount, onPageChange }) {
  const pageNumbers = [];

  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage !== pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="list-page-number">
      <button type="button" onClick={previousPage} disabled={currentPage === 1}>
        <img
          className={currentPage === 1 ? 'arrow-icon-disabled' : 'arrow-icon'}
          src="/assets/vectors/vector_pagination_left.svg"
          alt="Go to previous page"
        />
      </button>
      {pageNumbers.map((number) => (
        <button type="button" onClick={() => onPageChange(number)}>
          <p
            key={number}
            className={
              currentPage === number ? 'current-page-number' : 'page-number'
            }
          >
            {number}
          </p>
        </button>
      ))}
      <button
        type="button"
        onClick={nextPage}
        disabled={currentPage === pageCount}
      >
        <img
          className={
            currentPage === pageCount ? 'arrow-icon-disabled' : 'arrow-icon'
          }
          src="/assets/vectors/vector_pagination_right.svg"
          alt="Go to next page"
        />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  pageCount: 2,
  currentPage: 1,
  onPageChange: undefined,
};

export default Pagination;
