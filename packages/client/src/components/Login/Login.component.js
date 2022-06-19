import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import './Login.styles.css';

import { auth } from '../../firebase.config';

export function Login() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const [address, setAddress] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const userr = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        address,
      );
      // eslint-disable-next-line no-console
      console.log(userr);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const userrr = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      // eslint-disable-next-line no-console
      console.log(userrr);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login-component">
      <div className="register">
        <h3> Register User </h3>

        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <input
          placeholder="address..."
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />

        <button type="button" onClick={register}>
          {' '}
          Create User
        </button>
      </div>

      <div className="login">
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button type="button" onClick={login}>
          {' '}
          Login
        </button>
      </div>
      <div className="logout">
        <h4> User Logged In: </h4>
        {user?.email}

        <button type="button" onClick={logout}>
          {' '}
          Sign Out{' '}
        </button>
      </div>
    </div>
  );
}
