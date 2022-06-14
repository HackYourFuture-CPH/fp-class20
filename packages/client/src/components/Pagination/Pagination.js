/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './ProductLists.css';
import PropTypes from 'prop-types';

function Pagination({
  nextPage,
  previousPage,
  currentPage,
  changePageByNumber,
}) {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }
  const numberOfPages = pageNumbers.length;

  return (
    <div className="list-page-number">
      <img
        className="arrow-icon"
        src="assets/vectors/vector_pagination_left.svg"
        alt="next-page-arrow-icon"
        onClick={() => previousPage(currentPage, numberOfPages)}
      />
      {pageNumbers.map((number) => (
        <p
          onClick={() => changePageByNumber(number)}
          className="page-number"
          key={number}
          style={currentPage === number ? { backgroundColor: '#382f2e' } : {}}
        >
          {number}
        </p>
      ))}
      <img
        className="arrow-icon"
        src="assets/vectors/vector_pagination_right.svg"
        alt="next-page-arrow-icon"
        onClick={() => nextPage(currentPage, numberOfPages)}
      />
    </div>
  );
}

Pagination.propTypes = {
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  currentPage: PropTypes.number,
  changePageByNumber: PropTypes.func,
};

Pagination.defaultProps = {
  nextPage: undefined,
  previousPage: undefined,
  currentPage: 1,
  changePageByNumber: undefined,
};

export default Pagination;
