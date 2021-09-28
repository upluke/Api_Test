import React from "react";
import { CartItem } from "./CartItem";

type ItemProp = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

interface CartProp {
  items: ItemProp[];
  getSignAndCalculate: (itemName: string, sign: string) => void;
}

export const Cart: React.FC<CartProp> = ({ items, getSignAndCalculate }) => {
    const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  const DisplayCartItems = items.map((item: ItemProp) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price}
        qty={item.qty}
        getSignAndCalculate={getSignAndCalculate}
      />
    );
  });
  return (
    <div>
      <div>Cart</div>
      {DisplayCartItems}
      {grandTotal}
    </div>
  );
};
