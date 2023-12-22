import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // counter=15
 let [counter, setCounter] =useState(15);   // why we need hooks :- to change the value in ui also at the same time 
 const addValue = () =>{
  console.log("clicked",counter);
  if(counter<20){
    counter=counter+1;
  }
  setCounter(counter)
 }

 const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1);
    }

 }
  return (
    <>
     <h1>hello prshnt</h1>
      <h2>counter Value: {counter}</h2>
    <button
      onClick={addValue}>Add Value: {counter}</button>
    <br/>
    <button
        onClick={removeValue}>Remove Value:{counter}</button>
    </>
  );
}
// main reason of using hoooks is ...in this code count is changed but on ui it will same ..for changing the count at everwhere then use hooks.
export default App
