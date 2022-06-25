import React, { useState, useEffect } from 'react';
import './RegisterForm.styles.css';
import { Button } from '../../../Button/Button.component';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../../../../firebase.config';
import getApiBaseUrl from '../../../../utils/getApiBaseUrl';
import { useNavigate } from 'react-router-dom';

const validationPatterns = {
  name: /^[a-zA-Z\s]+$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  mobile: /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/,
  street: /^((.){1,}(\d){1,}(.){0,})$/,
  zipCode: /^[D-d][K-k]( |-)[1-9]{1}[0-9]{3}$/,
};

const errorMessage = {
  required: 'is required',
  name: 'Name can not include Number',
  email: 'Please enter a valid email address: example@domain.com',
  // mobile:
  //   'Please enter a valid mobile number:  (+45) 35 35 35 35 ||| +45 35 35 35 35 ||| 35 35 35 35 ||| 35353535',
  streetName:
    'Please enter a valid address: Teststreet 32 | Tørststræde 4 | Tørststræde 24 1. tv',
  city: 'City name is required',
  zipCode: 'Please enter a valid zipCode: DK-1234|||dk 1234|||Dk-1234',
};

export const RegisterForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    // mobile: '',
    country: '',
    streetName: '',
    city: '',
    zipCode: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isAllInputProvided, setIsAllInputProvided] = useState(false);
  const [errorState, setErrorState] = useState([]);

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [retypeRegisterPassword, setRetypeRegisterPassword] = useState('');
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      if (retypeRegisterPassword !== registerPassword) {
        setMessage('password not matched');
      } else {
        const userr = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          // formState.email,
          registerPassword,
        );
        // eslint-disable-next-line no-console
        console.log(userr);
      }
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

  useEffect(() => {
    if (
      formState.name &&
      formState.email &&
      // formState.mobile &&
      formState.country &&
      formState.streetName &&
      formState.city &&
      formState.zipCode
    ) {
      setIsAllInputProvided(true);
    } else {
      setIsAllInputProvided(false);
    }
  }, [formState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value.trim() });
    setIsMessageSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    errors = Object.keys(formState).map((key) => {
      const error = {
        field: key,
        message: '',
      };
      if (!formState[key]) {
        error.message = `${[key]} ${errorMessage.required}`;
      } else if (
        Object.prototype.hasOwnProperty.call(validationPatterns, `${key}`)
      ) {
        if (!formState[key].match(validationPatterns[key])) {
          error.message = errorMessage[key];
        }
      }
      return error;
    });
    setErrorState(errors);

    if (errors.filter((err) => err.message !== '').length === 0) {
      // handlePost(
      //   formState.name,
      //   formState.email,
      //   formState.mobile,
      //   formState.streetName,
      //   formState.city,
      //   formState.zipCode,
      // );

      const inputObj = {
        fullName: formState.name,
        email: formState.email,
        address: formState.streetName,
        city: formState.city,
        zipCode: formState.zipCode,
        country: formState.country,
      };

      (async () => {
        await fetch(`${getApiBaseUrl()}/api/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify(inputObj),
        });

        setIsMessageSent(true);
        navigate('/');
      })();

      // register();
      setIsMessageSent(true);
      setFormState({
        name: '',
        email: '',
        // mobile: '',
        country: '',
        streetName: '',
        city: '',
        zipCode: '',
      });
    }
  };
  const errObj = {
    name: errorState
      .filter((error) => error.field === 'name')
      .map((error) => error.message),
    email: errorState
      .filter((error) => error.field === 'email')
      .map((error) => error.message),
    // mobile: errorState
    //   .filter((error) => error.field === 'mobile')
    //   .map((error) => error.message),
    streetName: errorState
      .filter((error) => error.field === 'streetName')
      .map((error) => error.message),
    city: errorState
      .filter((error) => error.field === 'city')
      .map((error) => error.message),
    zipCode: errorState
      .filter((error) => error.field === 'zipCode')
      .map((error) => error.message),
  };

  return (
    <div className="signup-container">
      <form id="signup-form">
        <div className="signup-wrapper-outer">
          <div className="signup-wrapper">
            {isMessageSent ? (
              <p className="signup-success-msg">Your data submitted</p>
            ) : (
              ''
            )}

            <div className="signup-form-row">
              <label className="signup-label " htmlFor="name">
                name
                <span className="signup-required-star">*</span>
              </label>

              <input
                className={
                  errorState?.some(
                    (field) => field.field === 'name' && field.message,
                  )
                    ? 'signup-input-wrong'
                    : 'signup-input'
                }
                type="text"
                id="name"
                name="name"
                value={formState.name}
                placeholder="type your name"
                onChange={handleChange}
                required
              />
            </div>
            <span className="signup-error-span"> {errObj.name}</span>

            <div className="signup-form-row">
              <label className="signup-label" htmlFor="email">
                email <span className="signup-required-star">*</span>
              </label>

              <input
                className={
                  errorState?.some(
                    (field) => field.field === 'email' && field.message,
                  )
                    ? 'signup-input-wrong'
                    : 'signup-input'
                }
                type="email"
                id="email"
                name="email"
                value={formState.email}
                placeholder="type your email"
                onChange={handleChange}
                required
              />
            </div>

            <span className="signup-error-span"> {errObj.email}</span>

            {/* <div className="signup-form-row">
              <label className="signup-label" htmlFor="mobile">
                mobile <span className="signup-required-star">*</span>
              </label>

              <input
                className={
                  errorState?.some(
                    (field) => field.field === 'mobile' && field.message,
                  )
                    ? 'signup-input-wrong'
                    : 'signup-input'
                }
                type="tel"
                id="mobile"
                name="mobile"
                value={formState.mobile}
                placeholder="type your mobile"
                onChange={handleChange}
                required
              />
            </div> */}

            <div className="signup-form-row">
              <label className="signup-label" htmlFor="country">
                Country <span className="signup-required-star">*</span>
              </label>

              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formState.country}
                placeholder="type your country"
                onChange={handleChange}
                required
              />
            </div>

            <span className="signup-error-span"> {errObj.mobile}</span>

            <p id="delivery"> DELIVERY ADDRESS</p>

            <div className="signup-form-row">
              <label className="signup-label" htmlFor="streetName">
                street name <span className="signup-required-star">*</span>
              </label>

              <input
                className={
                  errorState?.some(
                    (field) => field.field === 'streetName' && field.message,
                  )
                    ? 'signup-input-wrong'
                    : 'signup-input'
                }
                type="text"
                id="streetName"
                name="streetName"
                value={formState.streetName}
                placeholder="type your street name"
                onChange={handleChange}
                required
              />
            </div>

            <span className="signup-error-span"> {errObj.streetName}</span>

            <div className="signup-form-row">
              <label className="signup-label" htmlFor="city">
                city <span className="signup-required-star">*</span>
              </label>

              <input
                className={
                  errorState?.some(
                    (field) => field.field === 'city' && field.message,
                  )
                    ? 'signup-input-wrong'
                    : 'signup-input'
                }
                type="text"
                id="city"
                name="city"
                value={formState.city}
                placeholder="type your city name"
                onChange={handleChange}
                required
              />
            </div>

            <span className="signup-error-span"> {errObj.city}</span>

            <div className="signup-form-row ">
              <label className="signup-label" htmlFor="zipCode">
                zip code <span className="signup-required-star">*</span>
              </label>

              <input
                className={
                  errorState?.some(
                    (field) =>
                      field.field === 'zipCode' && field.message.length,
                  )
                    ? 'signup-input-wrong'
                    : 'signup-input'
                }
                type="text"
                id="zipCode"
                name="zipCode"
                value={formState.zipCode}
                placeholder="type your zip-code"
                onChange={handleChange}
                required
              />
            </div>

            <span className="signup-error-span"> {errObj.zipCode}</span>

            <div className="signup-form-row">
              <Button
                className={
                  isAllInputProvided
                    ? 'all-input-provided-button'
                    : 'all-input-notprovided-button'
                }
                onClick={handleSubmit}
                size="large"
                label="Register"
                icon=""
              />
            </div>
          </div>
        </div>
      </form>
      <form id="register-form">
        <h3> Register User </h3>
        <input
          value={registerEmail}
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          value={registerPassword}
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <input
          value={retypeRegisterPassword}
          type="password"
          placeholder="Retype Password..."
          onChange={(e) => {
            setRetypeRegisterPassword(e.target.value);
          }}
        />
      </form>
      {message}
      <button type="button" onClick={register}>
        register
      </button>
      <form id="login-form">
        <div className="login">
          <input
            placeholder="Email..."
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </div>
      </form>

      <button type="button" onClick={login}>
        Login
      </button>
      <div className="logout">
        <h4> User Logged In: </h4>
        {user?.email}
        <button type="button" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
