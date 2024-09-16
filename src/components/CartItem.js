import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import formatPrice from "../data/formatPrice";
const CartItem = ({ id, image, name, amount, color, price }) => {
  const { removeCartItem } = useCartContext();
  return (
    <div className="cart-content m-2">
      <img src={image} className="cart-img"></img>
      <div className="cart-info">
        <h3>{name}</h3>
        <h2>
          Price:<span>{formatPrice(price)}</span>
        </h2>
        <h5 className="color">
          Boja: <span style={{ background: color }}></span>{" "}
        </h5>
        <h3>
          Kolicina: <span>{amount}</span>
        </h3>
      </div>
      <h3
        className="delete-item"
        onClick={() => {
          removeCartItem(id);
        }}
      >
        <FaTrash />
      </h3>
    </div>
  );
};

export default CartItem;
