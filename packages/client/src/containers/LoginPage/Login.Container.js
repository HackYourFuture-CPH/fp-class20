import React from 'react';
import './Login.Styles.css';

import { SigninForm } from '../../components/Form/SigninForm/SigninForm.Component';

export function Login() {
  return (
    <div className="loginpage-container">
      <SigninForm />
    </div>
  );
}
