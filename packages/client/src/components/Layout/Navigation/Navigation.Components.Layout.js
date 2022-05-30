import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import './Navigation.Components.Style.css';
import { NavigationTop } from './NavigationTop.Components.Layout';

export function Navigation() {
  return (
    <nav>
      <NavigationTop />
      <section className="navigationMain">
        <ul>
          <select>
            <option> not ready</option>

            <option> not ready</option>

            <option>
              <Link to="/"> not ready </Link>
            </option>
          </select>
          <li>
            <NavLink to="/about-us">ABOUT US </NavLink>
          </li>

          <li>
            <NavLink to="/contact-us">CONTACT US </NavLink>
          </li>

          <li>
            <input type="text" placeholder="..search spices" />
          </li>
        </ul>
      </section>
    </nav>
  );
}
