// CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        setExchangeRates(response.data.rates);
      } 
      catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [fromCurrency]);

  const convertCurrency = () => {
    const rate = exchangeRates[toCurrency];
    if (rate) {
      const converted = amount * rate;
      setConvertedAmount(converted.toFixed(2));
      console.log(convertedAmount);
    } else {
      setConvertedAmount(null);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 max-w-md rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Currency Converter</h1>
      <div className="flex space-x-4">
        <input
          type="number"
          className="w-1/2 p-2 border border-gray-300 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="w-1/4 p-2 border border-gray-300 rounded"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="flex items-center">to</span>
        <select
          className="w-1/4 p-2 border border-gray-300 rounded"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {convertedAmount !== null && (
        <p className="mt-4">
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </p>
      )}

    </div>
  );
};

export default CurrencyConverter;
