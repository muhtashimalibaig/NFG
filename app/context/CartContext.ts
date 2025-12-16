"use client";
import { createContext } from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  images: any;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  total: number;
}

const CartContext = createContext<CartContextType | null>(null);

export default CartContext;
