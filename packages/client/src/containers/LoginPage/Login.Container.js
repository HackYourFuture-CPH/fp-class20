import React, { useEffect, useState } from 'react';
import './Login.Styles.css';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import PropTypes from 'prop-types';

export const Login = (props) => {
  // global state from App.js
  const { logedIn, setLogedIn } = props;

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [userinfo, setUserinfo] = useState([]);
  const [usermatch, setUserMatch] = useState(false);

  const { user_id: userId } = useParams();

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

  useEffect(() => {
    onHandleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleLogin = async (e) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/users/${userId}`);

      const usersinfo = await response.json();
      setUserinfo(usersinfo);
      setName(usersinfo[0].fullName);

      setLogedIn(!logedIn);
    } catch (error) {
      throw error;
    }
  };

  // const onHandleLogin = async (e) => {
  //   e.preventDefault();
  //   // eslint-disable-next-line no-useless-catch
  //   try {
  //     if (!errorEmail && !errorName && !errorPassword) {
  //       const response = await fetch(`${getApiBaseUrl()}/api/users/${userId}`);

  //       const usersinfo = await response.json();
  //       setUserinfo(usersinfo);

  //       if (
  //         userinfo[0].fullName.toLowerCase().includes(name.toLowerCase()) &&
  //         password === '666666'
  //       ) {
  //         setLogedIn(true);
  //         setUserMatch(true);
  //       } else {
  //         setLogedIn(false);
  //         setUserMatch(true);
  //       }
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
    <>
      {!logedIn && !usermatch && (
        <div className="login-logout-container-backgorund">
          <div className="login-logout-container">
            <form onSubmit={(e) => onHandleLogin(e)}>
              <div className="input-div">
                <label>
                  User name :
                  <input
                    style={{ fontSize: 24 }}
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
                    style={{ fontSize: 24 }}
                    type="email"
                    defaultValue={email}
                    onChange={handleChangeEmail}
                    required
                    placeholder="email@email.com"
                  />
                </label>
              </div>
              <div className="input-div">
                {errorEmail && <p>{errorEmail}</p>}
              </div>

              <div className="input-div">
                <label>
                  pass word :
                  <input
                    style={{ fontSize: 24 }}
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
                <Button icon="" label="Log In" type="Log in" />
              </div>
            </form>
          </div>
        </div>
      )}
      {logedIn && (
        <div className="login-logout-container">
          <h3 className="login-succees-notice">
            welcome back !
            <br />
            <br /> {name}
            <br />
            <br /> Enjoy your shopping time
          </h3>

          <Link to="/">
            <Button icon="" label="SHOP" type="shop" />
          </Link>
        </div>
      )}

      {!logedIn && usermatch && (
        <div className="login-logout-container">
          <h3 className="login-succees-notice">plese signup first !</h3>

          <Link to="/signup">
            <Button icon="" label="Sign up" type="shop" />
          </Link>
        </div>
      )}
    </>
  );
};

Login.propTypes = {
  logedIn: PropTypes.string,
  setLogedIn: PropTypes.func,
};

Login.defaultProps = {
  logedIn: false,
  setLogedIn: () => {},
};
