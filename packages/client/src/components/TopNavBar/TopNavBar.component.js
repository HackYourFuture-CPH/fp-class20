import React, { useState } from 'react';
import './TopNavBar.styles.css';

function TopNavBar() {
  const [botton, setBotton] = useState('top-nav-right-container');
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      setBotton('top-nav-right-container-menu');
    } else {
      setBotton('top-nav-right-container');
    }
  };

  return (
    <div className="top-nav-background">
      <div className="top-nav-main-container">
        <div className="logo-container">
          <div>
            <h2>Simply Spices</h2>
          </div>
          <div>
            {/* eslint-disable-next-line */}
            <div className="toggle-button" onClick={handleClick}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </div>
        </div>

        <div className={botton}>
          <div className="sign-in-container">
            <img
              className="sign-in-icon"
              src="assets/vectors/vector_sign_in.svg"
              alt="signin-icon"
            />
            <span className="sign-in-text"> Sign in</span>
          </div>
          <div className="favourite-container">
            <img
              className="favourite-icon"
              src="assets/vectors/vector_heart_empty.svg"
              alt="favourite-icon"
            />{' '}
            <span className="favourites-text">Favourites </span>
          </div>
          <div className="cart-container">
            <img
              className="cart-icon"
              src="assets/vectors/vector_cart.svg"
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
            <img
              className="sign-in-icon"
              src="assets/vectors/vector_sign_in.svg"
              alt="signin-icon"
            />
            <span className="sign-in-text"> Sign in</span>
          </div>
          <div className="favourite-container">
            <img
              className="favourite-icon"
              src="assets/vectors/vector_heart_empty.svg"
              alt="favourite-icon"
            />{' '}
            <span className="favourites-text">Favourites </span>
          </div>
          <div className="cart-container">
            <img
              className="cart-icon"
              src="assets/vectors/vector_cart.svg"
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
