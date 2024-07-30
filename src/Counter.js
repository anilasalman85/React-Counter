import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome! Start counting.');

  const increment = () => {
    setCount(count + 1);
    setMessage('You increased the count!');
  };

  const decrement = () => {
    setCount(count - 1);
    setMessage('You decreased the count!');
  };

  const reset = () => {
    if (window.confirm('Are you sure you want to reset the counter?')) {
      setCount(0);
      setMessage('The counter has been reset.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={reset}
        >
          Reset
        </button>
        <div className="mt-4 text-xl font-semibold">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Counter;
