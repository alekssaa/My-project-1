import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";

import { PiShoppingCartBold } from "react-icons/pi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Početna",
    component: <Home />,
  },
  {
    id: 2,
    url: "/products",
    text: "Proizvodi",
    component: <Products />,
  },
  {
    id: 3,
    url: "/cart",
    text: <PiShoppingCartBold />,
    component: <Cart />,
  },
];
