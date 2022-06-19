import React from 'react';
import './Corporate.styles.css';
import { Link } from 'react-router-dom';

export const Corporate = () => {
  return (
    <div className="corporate-info">
      <span className="text-big">
        {' '}
        <Link to="/about-us"> AboutUs</Link>{' '}
      </span>

      <a href="# ">
        <span className="text-small">Our partners</span>
        <span className="text-small">Sustainability</span>
        <span className="text-small">Terms of Service</span>
      </a>
    </div>
  );
};
