import React, { useState } from 'react';

import favouriteIcon from '../../../public/assets/vectors/vector_heart_empty.svg';
import CartIcon from '../../../public/assets/vectors/vector_cart.svg';
import signIn from '../../../public/assets/vectors/vector_sign_in.svg';
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
            <h2> Simply Spices</h2>
          </div>
          <div>
            <a href="#" className="toggle-button" onClick={handleClick}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </a>
          </div>
        </div>
        {/* <div className="top-nav-right-container"> */}

        <div className={botton}>
          <div className="sign-in-container">
            <img className="sign-in-icon" src={signIn} alt="signin-icon" />
            <span className="sign-in-text"> Sign in</span>
          </div>
          <div className="favourite-container">
            <img
              className="favourite-icon"
              src={favouriteIcon}
              alt="favourite-icon"
            />{' '}
            <span className="favourites-text">Favourites </span>
          </div>
          <div className="cart-container">
            <img className="cart-icon" src={CartIcon} alt="cart-icon" />
            <span className="number">0</span>
            <span className="cart-text">Cart</span>
          </div>
          {/* // </div> */}
        </div>
      </div>
      {showMenu ? (
        <div className="new">
          {' '}
          <div className="sign-in-container">
            <img className="sign-in-icon" src={signIn} alt="signin-icon" />
            <span className="sign-in-text"> Sign in</span>
          </div>
          <div className="favourite-container">
            <img
              className="favourite-icon"
              src={favouriteIcon}
              alt="favourite-icon"
            />{' '}
            <span className="favourites-text">Favourites </span>
          </div>
          <div className="cart-container">
            <img className="cart-icon" src={CartIcon} alt="cart-icon" />
            <span className="number">0</span>
            <span className="cart-text">Cart</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default TopNavBar;
