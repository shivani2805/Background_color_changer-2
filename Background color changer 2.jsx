import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("yellow");

  const colorChanger = (newColor) => {
    setColor(newColor);
  }

  // Apply background color to the body element
  document.body.style.backgroundColor = color;

  return (
    <div className='cChnger'>
      <button onClick={() => colorChanger("green")}>Green</button>
      <button onClick={() => colorChanger("red")}>Red</button>
      <button onClick={() => colorChanger("blue")}>Blue</button>
    </div>
  );
}

export default App;
