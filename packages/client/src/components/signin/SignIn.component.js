import React from 'react';

import signIn from '../../../public/assets/Signin.png';

import './signin.css';

const SignIn = () => {
  return (
    <div className="sign-in">
      <img className="sign-in-icon" src={signIn} alt="signin-icon" />
      <span> Sign in</span>
    </div>
  );
};
export default SignIn;
