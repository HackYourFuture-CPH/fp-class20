import React from 'react';
import './header.css';
import Logo from '../logo/Logo.component';
import SignIn from '../signin/SignIn.component';
import Favourites from '../favourites/Favourites.component';
import Cart from '../cart/Cart.component';

const Header = () => {
  return (
    <div className="main-container">
      <div className="logo">
        <Logo />
      </div>
      <div className="container">
        <SignIn />
        <Favourites />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
