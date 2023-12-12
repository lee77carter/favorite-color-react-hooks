import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#5795b1");

  const changeBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div className="App">
      <h2>Select your favorite color!</h2>
      <div className="color-picker">
        <p>Click me ▶▶▶</p>
        <input
          className="color-input"
          type="color"
          value={backgroundColor}
          onChange={changeBackgroundColor}
        />
      </div>
      <div
        className="color-square"
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
};

export default App;
