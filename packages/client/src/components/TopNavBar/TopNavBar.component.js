import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNavBar.styles.css';
import PropTypes from 'prop-types';

// export const LoginState = createContext();

function TopNavBar(props) {
  const [botton, setBotton] = useState('top-nav-right-container');
  const [showMenu, setShowMenu] = useState(false);
  const { logedIn, setLogedIn } = props;
  // const [signIn, setSignIn] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      setBotton('top-nav-right-container-menu');
    } else {
      setBotton('top-nav-right-container');
    }
  };

  const changeToLogOut = () => {
    setLogedIn(!logedIn);
  };

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

        <div className={botton}>
          <div className="sign-in-container">
            <img
              className="sign-in-icon"
              src="/assets/vectors/vector_sign_in.svg"
              alt="signin-icon"
            />
            {/* <span className="sign-in-text"> */}
            {logedIn ? (
              <button
                type="submit"
                onClick={changeToLogOut}
                className="logout-button-design"
              >
                hi,Violetta
              </button>
            ) : (
              <button
                type="submit"
                onClick={changeToLogOut}
                className="logout-button-design"
              >
                Sign in
              </button>
            )}
            {/* </span> */}
          </div>
          <div className="favourite-container">
            <img
              className="favourite-icon"
              src="/assets/vectors/vector_heart_empty.svg"
              alt="favourite-icon"
            />{' '}
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
            <img
              className="sign-in-icon"
              src="/assets/vectors/vector_sign_in.svg"
              alt="signin-icon"
            />
            {logedIn ? (
              <button
                type="submit"
                onClick={changeToLogOut}
                className="logout-button-design"
              >
                hi,Violetta
              </button>
            ) : (
              <button
                type="submit"
                onClick={changeToLogOut}
                className="logout-button-design"
              >
                Sign in
              </button>
            )}
          </div>
          <div className="favourite-container">
            <img
              className="favourite-icon"
              src="/assets/vectors/vector_heart_empty.svg"
              alt="favourite-icon"
            />{' '}
            <span className="favourites-text">Favourites </span>
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

TopNavBar.propTypes = {
  logedIn: PropTypes.string,
  setLogedIn: PropTypes.func,
};

TopNavBar.defaultProps = {
  logedIn: false,
  setLogedIn: () => {},
};
