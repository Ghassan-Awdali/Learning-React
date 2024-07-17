import React from "react";
import Fruit from "./Fruit";

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
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
