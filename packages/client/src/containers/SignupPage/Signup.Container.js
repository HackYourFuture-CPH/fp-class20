import React from 'react';
import './Signup.Styles.css';

import { LoginSignupForm } from '../../components/Form/LoginSignupForm/LoginSignupForm.component';

export const Signup = () => {
  return (
    <div className="signup-container-background">
      <div className="signup-container-main-form">
        <LoginSignupForm />
      </div>
    </div>
  );
};
