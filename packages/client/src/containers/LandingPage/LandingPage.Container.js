import React, { useState, useEffect } from 'react';
import './LandingPage.Style.css';
import Pagination from '../../components/Pagination/Pagination';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import Preloader from '../../components/Preloader/Preloader.component';
import { LandingPageSlogan } from '../../components/LandingPageUpperSection/LandingPageSlogan';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductsList } from './ProductsList';

export const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [numberOfPages] = useState(2);

  /* Hard coded number, due to not receiving the total number of products from DB. 
   https://hackyourfuture-dk.atlassian.net/browse/CLASS20-120?atlOrigin=eyJpIjoiMzYzMTQ0MmFhZDNkNDk1OTgyYjE2M2Y2MTA4YTg2NWEiLCJwIjoiaiJ9
   */

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `${getApiBaseUrl()}/api/products?pageIndex=${currentPage - 1}`,
      );

      if (!response.ok) {
        throw Error('something went wrong, please try again later');
      }

      const fetchedProducts = await response.json();

      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  // Text object for sortBy( BreadCrumb).
  const bradCrumb = {
    sidebar: 'Simply Spices / All Spices ',
    main: 'All Spices',
  };

  if (loading) return <Preloader />;
  return (
    <>
      {' '}
      <div className="landing-page-header">
        <LandingPageSlogan />
      </div>
      <SortBy textObj={bradCrumb} />
      <div id="listed-products">
        <ProductsList products={products} />
        <Pagination
          currentPage={currentPage}
          pageCount={numberOfPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};
