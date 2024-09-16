import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaSearchPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import formatPrice from "../data/formatPrice";
const Product = ({ image, name, price, id }) => {
  return (
    <div className="box">
      <div className="container_product">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link_single">
          <FaSearchPlus className="icon" />
        </Link>
      </div>
      <div className="box-text">
        <div className="title-price">
          <h3>{name}</h3>
          <span>{formatPrice(price)} KM</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
