// import React, { useState } from 'react';

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';
// import './SigninForm.Styles.css';

// // import { auth } from '../../../firebase.config';

// export function SigninForm() {
//   const [registerEmail, setRegisterEmail] = useState('');
//   const [registerPassword, setRegisterPassword] = useState('');
//   const [retypeRegisterPassword, setRetypeRegisterPassword] = useState('');

//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [user, setUser] = useState({});
//   const [message, setMessage] = useState('');

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   const register = async () => {
//     try {
//       if (retypeRegisterPassword !== registerPassword) {
//         setMessage('password not matched');
//       } else {
//         const userr = await createUserWithEmailAndPassword(
//           auth,
//           registerEmail,
//           registerPassword,
//         );
//       }
//     } catch (error) {
//       // eslint-disable-next-line no-console
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const userrr = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword,
//       );
//     } catch (error) {
//       // eslint-disable-next-line no-console
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div className="login-component">
//       {/* register */}
//       <div className="register">
//         <h3> Register User </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setRegisterEmail(event.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Password..."
//           onChange={(event) => {
//             setRegisterPassword(event.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Retype Password..."
//           onChange={(event) => {
//             setRetypeRegisterPassword(event.target.value);
//           }}
//         />
//         {message}
//         <button type="button" onClick={register}>
//           Create User
//         </button>
//       </div>
//       {/* login */}
//       <div className="login">
//         <h3> Login </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Password..."
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//         />

//         <button type="button" onClick={login}>
//           Login
//         </button>
//       </div>
//       {/* logout */}
//       <div className="logout">
//         <h4> User Logged In: </h4>
//         {user?.email}
//         <button type="button" onClick={logout}>
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// }
