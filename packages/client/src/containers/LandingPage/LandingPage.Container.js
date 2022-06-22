import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import Preloader from '../../components/Preloader/Preloader.component';
import './LandingPage.Style.css';
import { ProductsList } from './ProductsList';

export const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  /* Hard coded number, due to not receiving the total number of products from DB. 
   https://hackyourfuture-dk.atlassian.net/browse/CLASS20-120?atlOrigin=eyJpIjoiMzYzMTQ0MmFhZDNkNDk1OTgyYjE2M2Y2MTA4YTg2NWEiLCJwIjoiaiJ9
   */

  const [numberOfPages, setNumberOfPages] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `${getApiBaseUrl()}/api/products?pageIndex=${currentPage - 1}`,
      );

      const fetchedProducts = await response.json();

      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  const changePageByNumber = (num) => {
    setCurrentPage(num);
  };

  if (loading) return <Preloader />;
  return (
    <div className="landing-page-container">
      <ProductsList products={products} />
      <Pagination
        currentPage={currentPage}
        pageCount={numberOfPages}
        onPageChange={changePageByNumber}
      />
    </div>
  );
};
