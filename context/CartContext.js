"use client";
import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const initialData = {
  cart: [],
};

// create global context
export const GlobalContext = createContext();

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);

  // Add product to cart Method
  const addProduct = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  // Remove Product
  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  // checkProduct already exist in the cart
  const checkProduct = (product) => {
    return state.cart.some((prod) => prod.id === product.id);
  };
  // calculate totalAmount
  const totalAmount = () => {
    return state.cart.reduce((sum, items) => sum + items.price, 0);
  };
  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        state,
        dispatch,
        addProduct,
        removeProduct,
        checkProduct,
        totalAmount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default CartContext;
