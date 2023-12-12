import React, { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <h2>Select your favorite color!</h2>
      <div className="color-picker">
        <p>Click me ▶▶▶</p>
        <input className="color-input" type="color" />
      </div>
      <div
        className="color-square"
        style={
          {
            /* something goes here */
          }
        }
      ></div>
    </div>
  );
};

export default App;
