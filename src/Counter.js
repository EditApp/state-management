import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  let message = '';
  if (countRef.current < count) message = 'higher';
  if (countRef.current > count) message = 'lower';
  countRef.current = count;

  const increment = () => setCount(c => c + 1);

  const decrement = () => setCount(c => c - 1);

  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter : ${count}`;
    setTimeout(() => {
      console.log(`Count: ${count}`);
    }, 3000);
  }, [count]);
  return (
    <div className="Counter">
      <p>{message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
