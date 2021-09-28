import React from "react";

interface CartItemProp {
  id: number;
  name: string;
  price: number;
  qty: number;
  getSignAndCalculate: (itemName: string, sign: string) => void;
}

export const CartItem: React.FC<CartItemProp> = ({
  name,
  price,
  qty,
  getSignAndCalculate
}) => {
  return (
    <div>
      <p>
        {name} - {price} -{" "}
        <button
          disabled={qty > 99 ? true : false}
          onClick={() => {
            getSignAndCalculate(name, "+");
          }}
        >
          +
        </button>{" "}
        {qty}{" "}
        <button
          disabled={qty < 2 ? true : false}
          onClick={() => {
            getSignAndCalculate(name, "-");
          }}
        >
          -
        </button>
      </p>
    </div>
  );
};
