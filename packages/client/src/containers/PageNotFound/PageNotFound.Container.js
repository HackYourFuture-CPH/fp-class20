import { Link } from 'react-router-dom';
import React from 'react';
import './PageNotFound.Style.css';

export function PageNotFound() {
  return (
    <div className="PageNotFoundContainer">
      <p>sorry !</p>
      <p>This page can not be found !! </p>
      <Link to="/"> go back to home page ... </Link>
    </div>
  );
}
