import React, { createContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BottomNavigation.styles.css';

export const searchContext = createContext();

const BottomNavigation = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const navigate = useNavigate();

  function handleSearchInput(e) {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && /^\s*$/.test(searchInputValue) === false) {
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
          placeholder="| Search spices"
          onKeyPress={handleSubmit}
        />
      </div>
    </>
  );
};

export default BottomNavigation;
