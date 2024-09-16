import React from "react";
import { links } from "../data/data.js";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext.js";
import formatPrice from "../data/formatPrice";

const Navbar = () => {
  const { total_amount } = useCartContext();
  return (
    <div className="navbar">
      <h4 className="logo">Logo</h4>
      <nav className="navbar">
        <ul className="navList">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink className="link" to={url}>
                  {text}
                </NavLink>
              </li>
            );
          })}
          <div className="cart-value">
            <span>{formatPrice(total_amount)} </span>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
