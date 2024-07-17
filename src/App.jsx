import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const seatNumbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="App">
        <ConditionalComponent />
      </div>

      <div>
        <Fruits></Fruits>
      </div>
    </>
  );
}

export default App;
