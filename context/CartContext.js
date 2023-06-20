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

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        state,
        dispatch,
        addProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default CartContext;
