/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './ProductLists.css';
import next from '../../../public/assets/Icons/next-Page.jpg';
import back from '../../../public/assets/Icons/previous-Page.jpg';
import PropTypes from 'prop-types';

function Pagination({
  cardPerPage,
  totalCards,
  nextPage,
  previousPage,
  currentPage,
}) {
  const pageNumbers = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  const numberOfPages = pageNumbers.length;

  return (
    <div className="list-page-number">
      <img
        className="arrow-icon"
        src={back}
        alt="next-page-arrow-icon"
        onClick={() => previousPage(currentPage, numberOfPages)}
      />
      {pageNumbers.map((number) => (
        <p
          className="page-number"
          key={number}
          style={currentPage === number ? { backgroundColor: '#382f2e' } : {}}
        >
          {number}
        </p>
      ))}
      <img
        className="arrow-icon"
        src={next}
        alt="next-page-arrow-icon"
        onClick={() => nextPage(currentPage, numberOfPages)}
      />
    </div>
  );
}

Pagination.propTypes = {
  cardPerPage: PropTypes.number,
  totalCards: PropTypes.number,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  currentPage: PropTypes.number,
};

Pagination.defaultProps = {
  cardPerPage: 10,
  totalCards: 30,
  nextPage: undefined,
  previousPage: undefined,
  currentPage: 1,
};

export default Pagination;
