import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SignupForm.styles.css';

const regEx = {
  nameRegEx: /^[a-zA-Z\s]+$/,
  emailRegEx:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  mobileRegEx: /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/,
  streetRegEx: /^((.){1,}(\d){1,}(.){0,})$/,
  zipCodeRegEx: /^[D-d][K-k]( |-)[1-9]{1}[0-9]{3}$/,
};

export const SignupForm = ({ text, label, handleSubmit }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobile: '',
    streetName: '',
    city: '',
    zipCode: '',
  });
  const [validation, setValidation] = useState({
    name: '',
    email: '',
    mobile: '',
    streetName: '',
    city: '',
    zipCode: '',
  });

  const [messageSent, setMessageSent] = useState('');
  const [isMessageValidate, setIsMessageValidate] = useState(false);

  useEffect(() => {
    if (
      formState.name &&
      formState.email &&
      formState.mobile &&
      formState.streetName &&
      formState.city &&
      formState.zipCode
    ) {
      setIsMessageValidate(true);
    } else {
      setIsMessageValidate(false);
    }
  }, [formState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleValidation = (e) => {
    e.preventDefault();

    const errors = { ...validation };

    setMessageSent('');

    const trimmed = {};
    Object.keys(formState).forEach((key) => {
      trimmed[key] = formState[key].trim();
    });

    if (!trimmed.name) {
      errors.name = ' Name is required';
    } else if (!trimmed.name.match(regEx.nameRegEx)) {
      errors.name = 'Name should only include letters';
    } else {
      errors.name = '';
    }

    if (!trimmed.email) {
      errors.email = 'Email is required';
    } else if (!trimmed.email.match(regEx.emailRegEx)) {
      errors.email = 'Please enter a valid email address: example@domain.com';
    } else {
      errors.email = '';
    }

    if (!trimmed.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!trimmed.mobile.match(regEx.mobileRegEx)) {
      errors.mobile =
        'Please enter a valid mobile number:  (+45) 35 35 35 35 ||| +45 35 35 35 35 ||| 35 35 35 35 ||| 35353535  ';
    } else {
      errors.mobile = '';
    }

    if (!trimmed.streetName) {
      errors.streetName = 'Street name is required';
    } else if (!trimmed.streetName.match(regEx.streetRegEx)) {
      errors.streetName =
        'Please enter a valid address: Teststreet 32 | Tørststræde 4 | Tørststræde 24 1. tv';
    } else {
      errors.streetName = '';
    }

    if (!trimmed.city) {
      errors.city = 'City name is required';
    } else {
      errors.city = '';
    }

    if (!trimmed.zipCode) {
      errors.zipCode = 'Zip code is required';
    } else if (!trimmed.zipCode.match(regEx.zipCodeRegEx)) {
      errors.zipCode =
        'Please enter a valid zipCode: DK-1234|||dk 1234|||Dk-1234';
    } else {
      errors.zipCode = '';
    }

    if (
      errors.name === '' &&
      errors.email === '' &&
      errors.mobile === '' &&
      errors.streetName === '' &&
      errors.city === '' &&
      errors.zipCode === ''
    ) {
      handleSubmit(
        trimmed.name,
        trimmed.email,
        trimmed.mobile,
        trimmed.streetName,
        trimmed.city,
        trimmed.zipcode,
      );
      setMessageSent('Your details is registered');
    }
    setValidation(errors);
  };

  return (
    <div>
      <div className="signup-form-container">
        <div className="wrapper-outer">
          <form id="signupForm">
            <div className="wrapper">
              <div className="errorMsg">
                {validation.name && <p>{validation.name}</p>}
                {validation.email && <p>{validation.email}</p>}
                {validation.mobile && <p>{validation.mobile}</p>}
                {validation.streetName && <p>{validation.streetName}</p>}
                {validation.city && <p>{validation.city}</p>}
                {validation.zipCode && <p>{validation.zipCode}</p>}
              </div>

              <p className="successMsg">{messageSent}</p>
              <div className="form-row">
                <label htmlFor="name">
                  name <span className="requiredStar">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  placeholder="type your name"
                  onChange={(e) => handleChange(e)}
                  minLength="5"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">
                  email <span className="requiredStar">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  placeholder="type your email"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="mobile">
                  mobile <span className="requiredStar">*</span>
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formState.mobile}
                  placeholder="type your mobile"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <p> DELIVERY ADDRESS</p>

              <div className="form-row">
                <label htmlFor="streetName">
                  street name <span className="requiredStar">*</span>
                </label>
                <input
                  type="text"
                  id="streetName"
                  name="streetName"
                  value={formState.streetName}
                  placeholder="type your street name"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="city">
                  city <span className="requiredStar">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formState.city}
                  placeholder="type your city name"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="zipCode">
                  zip code <span className="requiredStar">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formState.zipCode}
                  placeholder="type your zip-code"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-row">
                <button
                  className={
                    isMessageValidate ? 'messageValidate' : 'notMessageValidate'
                  }
                  type="button"
                  label={label}
                  onClick={handleValidation}
                >
                  {text}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
};

SignupForm.defaultProps = {
  text: null,
  handleSubmit: () => {
    // eslint-disable-next-line
    console.log('button clicked');
  },
};
