import React from 'react';

import signIn from '../../../public/assets/vectors/vector_sign_in.svg';

import './Signin.styles.css';

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <img className="sign-in-icon" src={signIn} alt="signin-icon" />
      <span className="sign-in-text"> Sign in</span>
    </div>
  );
};
export default SignIn;
