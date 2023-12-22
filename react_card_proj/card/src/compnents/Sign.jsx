import React from 'react';
import './sign.css';

function Sign() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" />

      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" name="dob" />

    
      <label>Gender:</label>
<div className="gender-options">
  <label>
    <input type="radio" name="gender" value="male" />
    Male
  </label>
  <label>
    <input type="radio" name="gender" value="female" />
    Female
  </label>
  <label>
    <input type="radio" name="gender" value="non-binary" />
  GAY
  </label>
</div>


      <button>Sign Up</button>
    </div>
  );
}

export default Sign;
