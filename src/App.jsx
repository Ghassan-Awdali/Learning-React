import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";

function App() {
  const seatNumbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="App">
        <Hello
          name="Ghassan"
          message="Hello there!"
          emoji="hi"
          seatNumbers={seatNumbers}
        />

        <Hello name="Awdali" message="Hello Where!" />
      </div>
      <div>
        <Fruits></Fruits>
      </div>
    </>
  );
}

export default App;
