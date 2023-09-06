import { useState, createContext } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(cartIndex) {
    setCart((prev) => prev.filter((product) => product.cartIndex != cartIndex));
  }

  const value = { cart, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
