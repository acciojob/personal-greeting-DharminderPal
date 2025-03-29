
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />

      {/* Greeting Display */}
      {name && <h2 className="greeting">Hello, {name}!</h2>}
    </div>
  )
}

export default App
