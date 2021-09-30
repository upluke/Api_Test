import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

type ItemsType={
  id: number;
  name: string;
  price:number;
  qty: number
}

interface CartProp{
  initialItems:ItemsType[]
}

export const Cart:React.FC<CartProp>=({ initialItems }) =>{
  const initialState = JSON.parse(window.localStorage.getItem("items")!);//Non-null assertion operator
  const [items, setItems] = useState(initialState || initialItems);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updateQty = ((id:number, newQty:number) => {
    const newItems = items.map((item:ItemsType) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  });

  const grandTotal = items
    .reduce((total:number, item:ItemsType) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
        {items.map((item:ItemsType) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>
      <h2 className="Cart-total">Grand Total: ${grandTotal}</h2>
    </div>
  );
}
 