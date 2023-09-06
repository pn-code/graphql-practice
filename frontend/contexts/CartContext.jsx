import { useState, createContext } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((product) => product.id != productId));
  }

  const value = { cart, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
