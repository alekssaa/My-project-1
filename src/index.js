import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsProvaider } from "../src/context/products_context";
import { CartProvaider } from "./context/CartContext";
import { FilterProvaider } from "./context/filters";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvaider>
    <FilterProvaider>
      <CartProvaider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvaider>
    </FilterProvaider>
  </ProductsProvaider>
);

reportWebVitals();
