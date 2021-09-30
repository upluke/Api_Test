import React from "react";
import {Cart}  from "./Cart";

const initialItems = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 }
];

export const CartList=()=> {
 

 

  return (
    <div className="App">
      <Cart initialItems={initialItems} />
    </div>
  );
}

// passing hook to child typescript:
// https://stackoverflow.com/questions/54575523/issue-with-passing-hook-to-child-typescript
