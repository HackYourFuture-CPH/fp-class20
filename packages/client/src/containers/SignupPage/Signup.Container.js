import React from 'react';
import './Signup.Styles.css';

import { SignupForm } from '../../components/Form/SignupForm/SignupForm.component';

export const Signup = () => {
  return (
    <div className="signup-container-background">
      <div className="signup-container-main-form">
        <SignupForm />
      </div>
    </div>
  );
};
