import React from 'react';
import './Login.Styles.css';
// import { SignupForm } from '../../components/Form/SignupForm/SignupForm.component';
// import { SigninForm } from '../../components/Form/SigninForm/SigninForm.Component';
import { RegisterForm } from '../../components/Form/RegisterForm/RegisterForm.Component';

export function Login() {
  return (
    <div className="loginpage-container">
      <p>login</p>

      <RegisterForm />
      {/* <SigninForm /> */}
    </div>
  );
}
