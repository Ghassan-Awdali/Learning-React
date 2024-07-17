import React from "react";

const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banananannanana", "Chocolate"];

  const fruits = [
    { name: "Apple", price: 10, emoji: "apple" },
    { name: "Mango", price: 13, emoji: "mango" },
    { name: "Bananana", price: 2, emoji: "bananana" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {" "}
            {fruit.name} {fruit.price} {fruit.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
