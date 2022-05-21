import React from 'react';

import { Link } from 'react-router-dom';
import './Navigation.Components.Style.css';

export function NavigationTop() {
  return (
    <section className="navigationTop">
      <ul>
        <Link to="/">
          <li>Logo</li>
        </Link>
        <Link to="/aboutUsPage">
          <li>SignIn</li>
        </Link>
        <Link to="/favourites">
          <li>Favourites</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </section>
  );
}
