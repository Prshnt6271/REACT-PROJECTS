// App.js
import React, { useState } from 'react';
import './app.css';

function CheckOddEven() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const CheckOddEven = () => {
    const parsedNumber = parseInt(number);

    if (isNaN(parsedNumber)) {
      setResult('Please enter a valid number.');
    } else {
      setResult(parsedNumber % 2 === 0 ? 'Even' : 'Odd');
    }
  };
  
  return (
    <div className="App">
      <h1>Odd or Even Checker</h1>
      <label>
        Enter a number:{' '}
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button onClick={CheckOddEven}>Check</button>
      <p>{result}</p>
    </div>
  );
}
export default CheckOddEven;
