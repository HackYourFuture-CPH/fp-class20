import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Contact.style.css';
import simplySpices from '../../assets/SimplySpices.png';
import Vector192 from '../../assets/Vector192.png';

export const Contact = ({ text, label }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [validation, setValidation] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const errors = validation;
    const errors = JSON.parse(JSON.stringify(validation));
    const values = Number(user.name);
    if (!user.name.trim()) {
      errors.name = ' Name is required';
    } else if (NaN(+values) === true) {
      errors.name = 'name can not be integer';
    } else {
      errors.name = '';
    }

    // email validation
    const emailValidation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!user.email.trim()) {
      errors.email = 'Email is required';
    } else if (!user.email.match(emailValidation)) {
      errors.email = 'Please enter a valid email address';
    } else {
      errors.email = '';
    }
    return setValidation(errors);
  };

  return (
    <div>
      <div className="contact-form-container">
        <div className="contactHead">
          <img alt="simply spices" src={simplySpices} />
          <img alt="simply spices" src={Vector192} />
        </div>

        <div className="wrapper-outer">
          <p>
            your opinion and questions matter to us so feel free to contact our
            customer service for all general enquiries. We respond withing
            maximum 2 working days.
          </p>
          <form
            id="contactForm"
            action="/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="wrapper">
              {validation.name && <p>{validation.name}</p>}
              {validation.email && <p>{validation.email}</p>}
              {validation.message && <p>{validation.message}</p>}
              <div className="form-row">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
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
                  value={user.email}
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
                  value={user.message}
                  placeholder="type your message"
                  onChange={(e) => handleChange(e)}
                  maxLength="200"
                  required
                />
              </div>

              <div className="form-row">
                <button type="submit" label={label}>
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
          <p> + 45 87654321 or press@simplyspices.dk</p>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Contact.defaultProps = {
  text: null,
};
