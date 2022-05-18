import React from 'react';

import signIn from '../assets/Signin.png';

import './signin.css';

const SignIn = () => {
  return (
    <div className="sign-in">
      <a className="sign-in-tag" href="#loginpage">
        {' '}
        <img className="sign-in-icon" src={signIn} alt="signin-icon" />
        Sign in
      </a>
    </div>
  );
};
export default SignIn;
