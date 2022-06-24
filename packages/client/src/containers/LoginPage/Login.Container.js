import React from 'react';
import './Login.Style.css';
import { SignupForm } from '../../components/Form/SignupForm/SignupForm.component';
import { SigninForm } from '../../components/Form/SigninForm/SigninForm.Component';

export function Login() {
  return (
    <div>
      <p>login</p>

      <SignupForm />
      <SigninForm />
    </div>
  );
}
