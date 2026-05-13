import { createContext, useState } from "react";

export const CartContext = createContext();

export function createContext({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  return (
    <CartContext
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext>
  );
}