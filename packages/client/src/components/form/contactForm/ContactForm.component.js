import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styles.css';

import contactPageSwirlDecoration from '../../../../public/assets/Vector192.png';

const validationPatterns = {
  name: /^[a-zA-Z\s]+$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const errorMessage = {
  required: 'is required',
  name: 'Name can not include Number',
  email: 'Please enter a valid email address: example@domain.com',
  message: 'message is required',
};

export const ContactForm = ({ text, label, handlePost }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isAllInputFilledOut, setIsAllInputFilledOut] = useState(false);
  const [errorState, setErrorState] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value.trim() });
    setIsMessageSent(false);
  };

  useEffect(() => {
    if (formState.name && formState.email && formState.message) {
      setIsAllInputFilledOut(true);
    } else {
      setIsAllInputFilledOut(false);
    }
  }, [formState]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = [];
    errors = Object.keys(formState).map((key) => {
      const error = {
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

    if (errors.filter((err) => err.message !== '').length === 0) {
      handlePost(formState.name, formState.email, formState.message);
      setIsMessageSent(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }
    setErrorState(errors);
  };

  return (
    <div>
      <div className="contact-form-container">
        <div className="contactHead">
          <p className="simplySpices"> Simply Spices</p>
          <img alt="simply spices" src={contactPageSwirlDecoration} />
        </div>

        <div className="wrapper-outer">
          <p>
            your opinion and questions matter to us so feel free to contact our
            customer service for all general enquiries. We respond withing
            maximum 2 working days.
          </p>
          <form id="contactForm">
            <div className="wrapper">
              {isMessageSent ? (
                <p className="successMsg">Message Sent</p>
              ) : (
                <div className="errorMsg">
                  {errorState.map((error) => (
                    <p>{error.message}</p>
                  ))}
                </div>
              )}
              <div className="form-row">
                <label htmlFor="name">
                  Name <span className="requiredStar">*</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  placeholder="type your name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">
                  Email <span className="requiredStar">*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  placeholder="type your email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="textarea">
                  Your message <span className="requiredStar">*</span>
                </label>

                <textarea
                  id="textarea"
                  name="message"
                  value={formState.message}
                  placeholder="type your message"
                  onChange={handleChange}
                  maxLength="200"
                  required
                />
              </div>

              <div className="form-row">
                <button
                  className={
                    isAllInputFilledOut ? 'readyButton' : 'normalButton'
                  }
                  type="submit"
                  label={label}
                  onClick={handleSubmit}
                >
                  {text}
                </button>
              </div>
            </div>
          </form>
          <p>
            Regardin all urgent matters you can also contact us on one of our
            phone numbers.
          </p>
          <p>
            Customer Service : + 45 11 22 33 11 <br /> Sales Representative: +45
            12 34 56 87
          </p>

          <span>+ 45 87654321 or press</span>
          <a
            href="https://www.hackyourfuture.dk/volunteer"
            target="_blank"
            rel="noreferrer"
          >
            @simplyspices.dk
          </a>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  handlePost: PropTypes.func,
};

ContactForm.defaultProps = {
  text: null,
  handlePost: () => {},
};
