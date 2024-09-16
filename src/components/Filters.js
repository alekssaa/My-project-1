import React from "react";
import { useState } from "react";
import { useFilterContext } from "../context/filters";
import formatPrice from "../data/formatPrice";
const Filters = () => {
  const getUniqueValues = (products, type) => {
    let filterType = products.map((product) => {
      return product[type];
    });
    const unique = ["Sve", ...new Set(filterType)];
    return unique;
  };
  const {
    filters: { text, category, min_price, price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");

  return (
    <div className="content">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <input
            type="text"
            name="text"
            className="search-input"
            value={text}
            onChange={updateFilters}
            placeholder="Pretraži proizvode"
          ></input>
        </div>
        <div className="form-control">
          <h5>Kategorije:</h5>
          {categories.map((c, index) => {
            return (
              <button
                key={index}
                onClick={updateFilters}
                name="category"
                value={c}
                className={`${c === category && "active"}`}
              >
                {c}
              </button>
            );
          })}
        </div>
        <div className="form-control">
          <h5>Cijena do: {formatPrice(price)}</h5>
          <input
            type="range"
            name="price"
            max={max_price}
            min={min_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
      </form>
      <button onClick={clearFilters} className="btn btn-danger">
        Očisti filtere
      </button>
    </div>
  );
};

export default Filters;
