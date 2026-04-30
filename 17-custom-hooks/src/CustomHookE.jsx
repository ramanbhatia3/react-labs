import { useRef, useState, useEffect } from 'react'

export const usePrev = (value) => {
  const ref = useRef();

  // Update the ref with the current value after each render
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value (current value of ref before it is updated)
  return ref.current;
};

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count); // Track the previous count value
  const [x, setX] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX(x => x + 1);
    }, 1000)

  }, []);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      {x}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default App


// Real Issue

// We think:
// “Give me previous count”

// But React is doing:
// “Give me value from previous render”