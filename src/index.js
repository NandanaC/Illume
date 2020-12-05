import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* const logIn = document.getElementById('logIn');
const logOut = document.getElementById('logOut');
const signUp = document.getElementById('signUp');
const txtEmail = document.getElementById('txtEmail');
const txtPass = document.getElementById('txtPass'); */

/* async function logInWithEmailAndPassword(email, pass) {
  console.log('Button clicked!');
  const response = await fetch('http://localhost:9000/firebaseAuth',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, pass: pass }),
    });
  const body = await response.text();
  console.log(body);
}*/

//logIn.addEventListener("click", console.log('Something!'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
