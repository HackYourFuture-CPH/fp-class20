import React from 'react';
import './Header.styles.css';
import Logo from '../Logo/Logo.component';
import SignIn from '../Signin/SignIn.component';
import Favourites from '../Favourites/Favourites.component';
import Cart from '../Cart/Cart.component';

const Header = () => {
  return (
    <div className="top-nav-background">
      <div className="top-nav-main-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="top-nav-right-container">
          <SignIn />
          <Favourites />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
