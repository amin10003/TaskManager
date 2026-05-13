import { createContext, useReducer } from "react";

import { cartReducer, initialState } from "@/Reducer/cartReducer";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
