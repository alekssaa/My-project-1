import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { FaChevronUp, FaChevronDown, FaCheck } from "react-icons/fa";
const AddToCart = ({ product }) => {
  const { colors, id, stock } = product;
  const [selectColor, setSelectColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();
  const incraseAmount = () => {
    setAmount((prevState) => {
      if (prevState + 1 > stock) {
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };
  const decraseAmount = () => {
    setAmount((prevState) => {
      if (prevState - 1 < 1) {
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <>
      <div className="colors">
        <span>Boje:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectColor(color);
                }}
                className="color-btn"
                style={{ background: color }}
              >
                {selectColor === color && <FaCheck className="check" />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="ntm-container add-to-cart">
        <div className="amount_container">
          <h1 className="amount_info">{amount}</h1>{" "}
          <div className="amount_bnts">
            <span
              onClick={() => {
                incraseAmount(id);
              }}
            >
              <FaChevronUp />
            </span>{" "}
            <span>
              <FaChevronDown
                onClick={() => {
                  decraseAmount(id);
                }}
              />
            </span>
          </div>
        </div>
        <Link
          to="/cart"
          className="btn btn-success"
          onClick={() => {
            addToCart(id, selectColor, amount, product);
          }}
        >
          Dodaj u korpu
        </Link>
      </div>
    </>
  );
};

export default AddToCart;
