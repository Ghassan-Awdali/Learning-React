import React from "react";

const Fruits = () => {
  const fruits = ["Apple", "Mango", "Banananannanana", "Chocolate"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}> {fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
