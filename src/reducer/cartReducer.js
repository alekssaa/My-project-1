import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../action";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, product, color, amount } = action.payload;
    const tempItem = state.cart.find((p) => {
      return p.id === id + color;
    });
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else return item;
      });
      return { ...state, cart: [...tempCart] };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  } else if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, cart: [...tempCart] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    let price = state.cart.reduce(
      (total, item) => {
        total.totalKol += item.amount;
        total.totlaPrice += item.amount * item.price;
        return total;
      },
      {
        totlaKol: 0, //kol proizvoda
        totlaPrice: 0, //cijena
      }
    );
    return {
      ...state,
      total_amount: price.totlaPrice,
      totoal_items: price.totlaKol,
    };
  }
  return state;
};

export default cartReducer;
