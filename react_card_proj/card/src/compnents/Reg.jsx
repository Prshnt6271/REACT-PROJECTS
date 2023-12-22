import React from 'react';

function RegistrationForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form submitted');
    };
  
    return (
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
  
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
  
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="" disabled defaultValue>
            Select
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
  
        <select id="country" name="country" required>
        <option value="" disabled defaultValue>
          Select Country
        </option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
        {/* Add more countries as needed */}
      </select>
  
        <button type="submit">Register</button>
      </form>
    );
  }
  
  export default RegistrationForm;