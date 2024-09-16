import React from "react";
import { useCartContext } from "../context/CartContext";
import formatPrice from "../data/formatPrice";
const Total = () => {
  const { total_amount } = useCartContext();

  return (
    <div className="total">
      <h1>Ukupna cijena: </h1>
      <h2> {formatPrice(total_amount)}</h2>
      <button className="btn btn-success">Placanje</button>
    </div>
  );
};

export default Total;
