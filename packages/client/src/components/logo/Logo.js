import React from 'react';

import simplySpices from '../assets/SimplySpices.png';

import './logo.css';

const Logo = () => {
  return (
    <div>
      <a className="logo-tag" href="#mainpage">
        <img className="logo" src={simplySpices} alt="logo" />
      </a>
    </div>
  );
};
export default Logo;
