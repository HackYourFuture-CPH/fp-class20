import React from 'react';

import signIn from '../../../public/assets/sign_in_image.png';

import './Signin.css';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <img className="sign-in-icon" src={signIn} alt="signin-icon" />
      <span className="sign-in-text"> Sign in</span>
    </div>
  );
};
export default SignIn;
