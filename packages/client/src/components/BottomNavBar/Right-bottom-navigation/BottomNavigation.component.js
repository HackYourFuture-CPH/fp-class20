import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BottomNavigation.styles.css';

const BottomNavigation = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const navigate = useNavigate();

  function handleSearchInput(e) {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  }

  const keyPressHandler = (e) => {
    e.preventDefault();
    if (e.key === 'Enter' && /^\s*$/.test(searchInputValue) === false) {
      // const history = JSON.parse(localStorage.getItem('history'));
      // history.push({ [JSON.stringify(searchInputValue)]: searchInputValue });
      // localStorage.setItem('history', JSON.stringify(history));
      // // eslint-disable-next-line no-console
      // console.log(localStorage.getItem('history'));
      submitHandler();
    }
    if (e.key !== 'BackSpace' && e.key !== 'Enter') {
      setSearchInputValue(searchInputValue + e.key);
    }
  };

  function submitHandler() {
    navigate(`/search/?name=${searchInputValue}`);
    setSearchInputValue('');
  }

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
        <form onSubmit={submitHandler}>
          <input
            onChange={handleSearchInput}
            className="input-container"
            type="text"
            value={searchInputValue}
            placeholder="| Search spices"
            onKeyPress={keyPressHandler}
          />
        </form>
      </div>
    </>
  );
};

export default BottomNavigation;
