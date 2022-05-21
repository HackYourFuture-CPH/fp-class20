import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import './Navigation.Components.Style.css';
// import searchIcon from '../../assets/si.png';

export function Navigation() {
  return (
    <nav>
      <ul>
        <select>
          <option> SPICES</option>

          <option> Nepali Herbs</option>

          <option>
            <Link to="/"> Himalaya Herbs </Link>
          </option>
        </select>

        <NavLink to="/aboutUs">
          <li>ABOUT US</li>
        </NavLink>
        <NavLink to="/contactUs">
          <li>CONTACT US</li>
        </NavLink>

        <li>
          <input type="text" placeholder="..search spices" />
        </li>
      </ul>
    </nav>
  );
}
