import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styles.css';
import contactPageMainImage from '../../assets/SimplySpices.png';
import contactPageSwirlDecoration from '../../assets/Vector192.png';

export const ContactForm = ({ text, label, handleSubmit }) => {
  const [formState, SetFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [validation, setValidation] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormState({ ...formState, [name]: value });
  };

  const handleValidation = (e) => {
    e.preventDefault();

    const errors = { ...validation };
    // eslint-disable-next-line

    const nameValidation = /^[a-zA-Z\s]+$/;

    if (!formState.name.trim()) {
      errors.name = ' Name is required';
    } else if (!formState.name.match(nameValidation)) {
      errors.name = 'Name should only include letters ';
    } else {
      errors.name = '';
    }

    const emailValidation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!formState.email.match(emailValidation)) {
      errors.email = 'Please enter a valid email address: example@domain.com';
    } else {
      errors.email = '';
    }

    if (!formState.message.trim()) {
      errors.message = 'Message is required';
    } else {
      errors.message = '';
    }

    if (errors.name === '' && errors.email === '' && errors.message === '') {
      handleSubmit(
        formState.name.trim(),
        formState.email.trim(),
        formState.message.trim(),
      );
      setMessageSent('Your message is sent');
    }
    setValidation(errors);
  };

  return (
    <div>
      <div className="contact-form-container">
        <div className="contactHead">
          <img alt="simply spices" src={contactPageMainImage} />
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
              {validation.name && <p>{validation.name}</p>}
              {validation.email && <p>{validation.email}</p>}
              {validation.message && <p>{validation.message}</p>}
              <p>{messageSent}</p>
              <div className="form-row">
                <label htmlFor="name">Name *</label>
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
                <label htmlFor="email">Email *</label>
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
                <label htmlFor="textarea"> Your message *</label>
                <textarea
                  id="textarea"
                  name="message"
                  value={formState.message}
                  placeholder="type your message"
                  onChange={(e) => handleChange(e)}
                  maxLength="200"
                  required
                />
              </div>

              <div className="form-row">
                <button type="button" label={label} onClick={handleValidation}>
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
          <p>
            + 45 87654321 or press + 45 87654321 or press
            <a
              href="https://www.hackyourfuture.dk/volunteer"
              target="_blank"
              rel="noreferrer"
            >
              @simplyspices.dk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
};

ContactForm.defaultProps = {
  text: null,
  handleSubmit: () => {
    // eslint-disable-next-line
    console.log('button clicked');
  },
};
