import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const seatNumbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
