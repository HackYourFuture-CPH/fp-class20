import React, { createContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BottomNavigation.styles.css';
import getApiBaseUrl from '../../../utils/getApiBaseUrl';

export const searchContext = createContext();

const BottomNavigation = () => {
  const [searchInputValue, setSearchInputValue] = useState('| Search spices');
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [fetchUrl, setFetchUrl] = useState();
  const [searchedProductIsLoading, setLoading] = useState(true);
  const [searchedProductsError, setError] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const nameReg = /^[A-Za-z]*$/;
  //   if (fetchUrl !== undefined && nameReg.test(fetchUrl)) {
  //     fetch(`${getApiBaseUrl()}/api/products?name=${fetchUrl}`)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('something went wrong');
  //         }
  //         return response.json();
  //       })
  //       .then((productTodisplay) => {
  //         setSearchedProducts(productTodisplay);
  //         setLoading(false);
  //       })
  //       .catch((err) => setError(err));
  //   }
  // }, [fetchUrl]);

  // eslint-disable-next-line no-console
  console.log(searchedProducts);

  function handleSearchInput(e) {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      // setFetchUrl(searchInputValue);
      // window.open('/SearchedProducts');
      navigate(`/search/?name=${searchInputValue}`);
    }
    if (e.key !== 'BackSpace' && e.key !== 'Enter') {
      setSearchInputValue(searchInputValue + e.key);
    }
  };

  return (
    <>
      <div className="text">
        <span>
          {' '}
          <Link to="/about-us"> ABOUT US </Link>
        </span>
      </div>
      <div className="text">
        <span>
          {' '}
          <Link to="/contact-us"> CONTACT </Link>{' '}
        </span>
      </div>
      <div className="search-container">
        <input
          onChange={handleSearchInput}
          className="input-container"
          type="text"
          value={searchInputValue}
          onKeyPress={handleSubmit}
        />
      </div>
    </>
  );
};

export default BottomNavigation;
