import React from 'react';

import signIn from '../../../public/assets/sign_in_ffffff.png';

import './signin.css';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <img className="sign-in-icon" src={signIn} alt="signin-icon" />
      <span> Sign in</span>
    </div>
  );
};
export default SignIn;
