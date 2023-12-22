// src/App.js

import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <label htmlFor="username">User Name:</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button>Login</button>
    </div>
  );
}

export default Login;
