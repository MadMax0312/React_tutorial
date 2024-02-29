import React, { useRef, useState } from 'react';

function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // This value persists across re-renders
    setCount(count + 1); // This triggers a re-render
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count Ref: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;


import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App
