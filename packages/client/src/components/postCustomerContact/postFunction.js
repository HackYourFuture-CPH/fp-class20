// import React, { useState } from 'react';

// export default function postFunction() {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [validation, setValidation] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   // const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setUser({ ...user, [name]: value });

//     // eslint-disable-next-line
//     console.log(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const errors = validation;
//     const errors = JSON.parse(JSON.stringify(validation));
//     const values = Number(user.name);
//     if (!user.name.trim()) {
//       errors.name = ' Name is required';
//     } else if (NaN(+values) === true) {
//       errors.name = 'name can not be integer';
//     } else {
//       errors.name = '';
//     }

//     // email validation
//     const emailValidation =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (!user.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!user.email.match(emailValidation)) {
//       errors.email = 'Please enter a valid email address';
//     } else {
//       errors.email = '';
//     }
//     return setValidation(errors);
//   };
// }
