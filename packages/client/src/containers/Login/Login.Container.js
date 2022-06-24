import React, { useState } from 'react';
import './Login.Styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button.component';

export const Login = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  function isValidEmail(a) {
    return /\S+@\S+\.\S+/.test(a);
  }

  const handleChangeEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setErrorEmail('Email is invalid');
    } else {
      setErrorEmail(null);
    }
    setEmail(event.target.value);
  };
  const handleChangeName = (event) => {
    const getName = event.target.value.split('');
    if (getName.length < 4) {
      setErrorName('Name is invalid');
    } else {
      setErrorName(null);
      setName(event.target.value);
    }
  };

  const handleChangePassword = (event) => {
    const getPassword = event.target.value.split('');
    if (getPassword.length < 6) {
      setErrorPassword('Password is invalid');
    } else {
      setErrorPassword(null);
      setPassword(event.target.value);
    }
  };

  const onHandleLogin = () => {
    if (!errorEmail && !errorName && !errorPassword) {
      setSuccess(true);
    }
  };
  return (
    <div className="login-logout-container-backgorund">
      {!success ? (
        <div className="login-logout-container">
          <form onSubmit={onHandleLogin}>
            <div className="input-div">
              <label>
                Full name :
                <input
                  style={{ fontSize: 28 }}
                  type="text"
                  defaultValue={name}
                  onChange={handleChangeName}
                  placeholder="Name..."
                  required
                  min={4}
                />
              </label>
            </div>
            <div className="input-div">{errorName && <p>{errorName}</p>}</div>
            <div className="input-div">
              <label>
                Email :
                <input
                  style={{ fontSize: 28 }}
                  type="email"
                  defaultValue={email}
                  onChange={handleChangeEmail}
                  required
                  placeholder="email@email.com"
                />
              </label>
            </div>
            <div className="input-div">{errorEmail && <p>{errorEmail}</p>}</div>

            <div className="input-div">
              <label>
                pass word :
                <input
                  style={{ fontSize: 28 }}
                  type="password"
                  defaultValue={password}
                  onChange={handleChangePassword}
                  placeholder="password123"
                  required
                />
              </label>
            </div>
            <div className="input-div">
              {errorPassword && <p>{errorPassword}</p>}
            </div>

            <div className="input-div-last-child">
              <Button icon="" label="Log In" type="shop" />
            </div>
          </form>
        </div>
      ) : (
        <div className="login-logout-container">
          <h3 className="login-succees-notice">
            Congratuations !
            <br /> {name}
            <br /> Enjoy your shopping time
          </h3>
          {success ? (
            <Link to="/">
              <Button icon="" label="SHOP" type="shop" />
            </Link>
          ) : (
            <Link to="/contact-us">
              <Button icon="" label="Sign Up" type="shop" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

//   function onHandleLogin(e) {
//     // e.preventDefault();
//     const nameLength = name.split('').length;
//     const passwordLength = password.split('').length;

//     if (nameLength < 4) {
//       setName('');
//       setError('invalid name');
//     }
//     if (!red.test(email)) {
//       setEmail('');
//       setError('invalid email');
//     }
//     if (passwordLength.length < 5) {
//       setPassword('');
//       setError('invalid password');
//     } else {
//       setSuccess(true);
//     }
//   }
