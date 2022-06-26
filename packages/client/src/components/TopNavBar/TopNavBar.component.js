import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNavBar.styles.css';
import { LoginlogoutContext } from '../Form/Login/UserLoginForm/UserLoginForm';

function TopNavBar() {
  const [botton, setBotton] = useState('top-nav-right-container');
  const [showMenu, setShowMenu] = useState(false);
  const { name, email } = LoginlogoutContext;

  const handleClick = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      setBotton('top-nav-right-container-menu');
    } else {
      setBotton('top-nav-right-container');
    }
  };

  // const loggedUserDerilized = JSON.parse(localStorage.getItem('loggedUser'));
  // eslint-disable-next-line
  console.log('in nav', name, email);

  return (
    <div className="top-nav-background">
      <div className="top-nav-main-container">
        <div className="logo-container">
          <div>
            <Link to="/">
              <h2>Simply Spices</h2>
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={handleClick}
              className="toggle-button"
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
        {name && <span> logged in as {name} </span>}
        <div className={botton}>
          {name ? (
            <div className="sign-in-container">
              <Link to="login">
                <img
                  className="sign-in-icon"
                  src="/assets/vectors/vector_sign_in.svg"
                  alt="signin-icon"
                />
                <span className="sign-in-text">
                  <button type="button" onClick={localStorage.clear()}>
                    Log out
                  </button>
                </span>
              </Link>
            </div>
          ) : (
            <div className="sign-in-container">
              <Link to="login">
                <img
                  className="sign-in-icon"
                  src="/assets/vectors/vector_sign_in.svg"
                  alt="signin-icon"
                />
                <span className="sign-in-text"> Sign in</span>
              </Link>
            </div>
          )}

          {/* <div className="sign-in-container">
            <Link to="login">
              <img
                className="sign-in-icon"
                src="/assets/vectors/vector_sign_in.svg"
                alt="signin-icon"
              />
              <span className="sign-in-text"> Sign in</span>
            </Link>
          </div> */}

          <div className="favourite-container">
            <img
              className="favourite-icon"
              src="/assets/vectors/vector_heart_empty.svg"
              alt="favourite-icon"
            />
            <Link to="/favorites/1">
              <span className="favourites-text">Favourites </span>
            </Link>
          </div>
          <div className="cart-container">
            <img
              className="cart-icon"
              src="/assets/vectors/vector_cart.svg"
              alt="cart-icon"
            />
            <span className="number">0</span>
            <span className="cart-text">Cart</span>
          </div>
        </div>
      </div>
      {showMenu ? (
        <div className="menu-mobile-layout">
          {' '}
          <div className="sign-in-container">
            <Link to="login">
              <img
                className="sign-in-icon"
                src="/assets/vectors/vector_sign_in.svg"
                alt="signin-icon"
              />
              <span className="sign-in-text"> Sign in</span>
            </Link>
          </div>
          <div className="favourite-container">
            <Link to="/favorites/1">
              <img
                className="favourite-icon"
                src="/assets/vectors/vector_heart_empty.svg"
                alt="favourite-icon"
              />{' '}
              <span className="favourites-text">Favourites </span>
            </Link>
          </div>
          <div className="cart-container">
            <img
              className="cart-icon"
              src="/assets/vectors/vector_cart.svg"
              alt="cart-icon"
            />
            <span className="number">0</span>
            <span className="cart-text">Cart</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default TopNavBar;
