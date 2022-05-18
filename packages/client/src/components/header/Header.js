import React from 'react';
import simplySpices from '../assets/SimplySpices.png';
import './header.css';
import cartIcon from '../assets/CartIcon.png';
import heartShape from '../assets/Love.png';
import signIn from '../assets/Signin.png';

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={simplySpices} alt="logo" />
      </div>
      <div className="container">
        <div className="sign-in">
          <img className="sign-in-icon" src={signIn} alt="signInimg" />
          Signin
        </div>
        <div className="favourite">
          <img className="favourite-icon" src={heartShape} alt="heartimg" />
          Favourites
        </div>
        <div className="cart">
          <img className="cart-img" src={cartIcon} alt="cartimg" />
          cart
        </div>
      </div>
    </div>
  );
};

export default Header;
