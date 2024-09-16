import React from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context.js";
import { useEffect } from "react";
import Loading from "../components/Loading.js";
import Error from "../pages/Error.js";
import ProductImages from "./ProductImages.js";
import AddToCart from "./AddToCart.js";
import formatPrice from "../data/formatPrice.js";
const SingleProduct = () => {
  const { id } = useParams();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  const {
    name,
    stars,
    colors,
    id: sku,
    images,
    price,
    description,
    stock,
  } = product;

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <main>
      <div className="img-box">
        <ProductImages images={images} />
      </div>

      <div className="description">
        <h2>{name}</h2>
        <h4>Cijena: {formatPrice(price)} KM</h4>
        <h5>opis proizvoda</h5>
        <p>{description}</p>
        <hr />
        <h5>
          Proizvoda na stanju:{" "}
          <span>{stock && <AddToCart product={product} />}</span>
        </h5>
        <h3> Ocjena</h3> <span>{stars}</span>
      </div>
    </main>
  );
};

export default SingleProduct;
