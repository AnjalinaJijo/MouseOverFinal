import React, { useState } from "react";

function App() {
  let [IsMouseOver, setMouseOver] = useState(false);

  function changeMouseOver() {
    setMouseOver(true);
  }

  function outMouseOver() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: IsMouseOver ? "black" : "white" }}
        onMouseOver={changeMouseOver}
        onMouseOut={outMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
