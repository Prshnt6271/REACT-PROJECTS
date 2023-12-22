
import React, { useState, useEffect } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(10);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecriment = () => {
  
        if(count1>0){
            setCount1(count1 - 1);
        }
        
   
  };

  useEffect(() => {
    console.log("use effect running");
  }, [count1]); // Added an empty dependency array to useEffect

  useEffect(() => {
    console.log("use effect running");
  }, [count]); // Added an empty dependency array to useEffect

  return (
    <>
      <h1>Example of useEffect</h1>
      <h1>The value is: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>The value is: {count1}</h1>
      <button onClick={handleDecriment}>Decriment</button>

    </>
  );
};

export default Count;
