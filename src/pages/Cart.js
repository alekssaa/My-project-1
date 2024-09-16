import React from "react";
import CartItem from "../components/CartItem";
import Total from "../components/Total";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <Total />
      <div className="btns-cart">
        <Link to="/products">
          {" "}
          <button className="btn btn-primary">Nazada na proizvode</button>
        </Link>
        <button className="btn btn-warning" onClick={clearCart}>
          {" "}
          Ocisti korpu
        </button>
      </div>
    </div>
  );
};

export default Cart;
