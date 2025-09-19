import { useState } from 'react';

function Counter() {
  // state variable for the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>

      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)} 
          style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}
        >
          Increment
        </button>

        <button 
          onClick={() => setCount(count - 1)} 
          style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}
        >
          Decrement
        </button>

        <button 
          onClick={() => setCount(0)} 
          style={{ margin: '5px', padding: '10px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
