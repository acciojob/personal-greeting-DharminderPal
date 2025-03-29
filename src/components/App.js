✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// import React from "react";
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  return (
 const [name, setName] = useState("");  // ✅ Define the state variables

  return (
    <div className="app-container">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}  // ✅ This will now work
        className="input-field"
      />

      {/* Greeting Display */}
      {name && <h2 className="greeting">Hello, {name}!</h2>}
    </div>
  )
}

export default App
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
