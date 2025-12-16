"use client";
import { useState, useMemo } from "react";
import CartContext, { CartItem } from "./CartContext";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ ADD TO CART (only once)
  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) return prev; // ❌ already added
      return [...prev, product];
    });
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ TOTAL PRICE (simple)
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
