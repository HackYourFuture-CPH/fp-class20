/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination.js';
import { ProductCards } from './ProductCards.js';
import getApiPath from '../../utils/getApiPath';
import './ProductLists.css';

function ProductListsContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        //  `${getApiPath()}/api/products`
        `http://localhost:5000/api/products?pageIndex=${currentPage - 1}`,
      );

      const spices = await response.json();

      setInfo(spices);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

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

  /*  set page by clicking on number  */

  const changePageByNumber = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="product-pages">
      <ProductCards data={info} />
      <div className="pagination-footer">
        <Pagination
          totalCards={info.length}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
          changePageByNumber={changePageByNumber}
        />
      </div>
    </div>
  );
}

export default ProductListsContainer;
