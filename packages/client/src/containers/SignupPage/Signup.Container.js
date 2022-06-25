import React from 'react';
import './Signup.Styles.css';
// import { Link } from 'react-router-dom';
// import { Button } from '../../components/Button/Button.component';
import { SignupForm } from '../../components/Form/SignupForm/SignupForm.component';

export const Signup = () => {
  return (
    <div className="signup-container-background">
      <div className="signup-container-main-form">
        <SignupForm />
        {/* <div className="signup-container-button">
          <Button icon="" label="Sign Up" type="shop" />
        </div> */}
      </div>
    </div>
  );
};
