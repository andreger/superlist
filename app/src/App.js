import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React!</h1>
        <p>You clicked the button {count} times</p>
        <button 
          className="counter-button"
          onClick={() => setCount(count + 1)}
        >
          Click me!
        </button>
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>✅ React 18 with hooks</li>
            <li>✅ Modern webpack configuration</li>
            <li>✅ Hot reloading for development</li>
            <li>✅ CSS styling support</li>
            <li>✅ Babel transpilation</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;