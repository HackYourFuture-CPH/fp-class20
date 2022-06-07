import { NavLink } from 'react-router-dom';
import React from 'react';
import './PageNotFound.Style.css';

export function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <p>sorry !</p>
      <p>This page can not be found !! </p>
      <NavLink to="/"> go back to home page ... </NavLink>
    </div>
  );
}
