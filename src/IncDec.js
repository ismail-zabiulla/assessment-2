import React, { useState } from 'react';

function IncDec() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = parseFloat(inputValue);
    if (!isNaN(userInput)) {
      setCount(prevCount => prevCount + userInput);
    }
    setInputValue('');
  };

  const reset = () => {
    setCount(0);
  };
  
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <div>increment/Decrement</div>
      <form  onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange}/>
        <button type="submit">Submit</button>
        </form>
        <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default IncDec;