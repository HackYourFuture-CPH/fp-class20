import React, { useState } from 'react';
import './Login.Styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button.component';

export const Login = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState('user1');
  const [password, setPassword] = useState('password');
  const [repassword, setRepassword] = useState('repassword');
  const [message, setMessage] = useState('');

  function onHandleLogin() {
    if (repassword !== password) {
      setMessage('pass word not match');
    } else {
      setSuccess(true);
    }
  }
  return (
    <div className="login-logout-container-backgorund">
      {!success ? (
        <div className="login-logout-container">
          <form onSubmit={onHandleLogin}>
            <div className="input-div">
              <label>
                Full name:
                <input
                  type="text"
                  id="user name"
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="input-div">
              <label>
                pass word:
                <input
                  type="password"
                  id="password"
                  name={password}
                  onChange={(e) => setRepassword(e.target.value)}
                  required
                />
              </label>
              <p>{message}</p>
            </div>
            <div className="input-div">
              <label>
                repassword:
                <input
                  type="password"
                  id="repassword"
                  name={repassword}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="input-div-last-child">
              <Button icon="" label="SUBMIT" type="shop" />
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
          {success && (
            <Link to="/">
              <Button icon="" label="SHOP" type="shop" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
