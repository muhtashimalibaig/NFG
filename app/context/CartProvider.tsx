"use client";

import { useState, useEffect, useMemo } from "react";
import CartContext, { CartItem } from "./CartContext";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize cart from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart (only once)
  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
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
