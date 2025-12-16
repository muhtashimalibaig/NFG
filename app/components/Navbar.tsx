"use client";
import Link from "next/link";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import BrandName from "./BrandName";
import { useContext, useState } from "react";
import Cart from "./Cart";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const cartContext = useContext(CartContext);

  // ✅ SAFE
  const cart = cartContext?.cart ?? [];

  return (
    <nav className='flex justify-between items-center px-8 md:px-12 py-6 border-b-2 border-light'>
      <Link href='/' className='font-extrabold text-2xl tracking-tighter'>
        <BrandName />
      </Link>

      <ul className='hidden md:flex gap-8 items-center'>
        <li>
          <Link href='/about'>About</Link>
        </li>

        <li>
          <Link href='/products'>Products</Link>
        </li>

        <li>
          <button
            className='relative hover:text-primary'
            onClick={() => setOpenCart(true)}>
            <ShoppingCart size={24} />

            {/* Badge */}
            <span className='absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full'>
              {cart.length}
            </span>
          </button>

          {openCart && (
            <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
          )}
        </li>

        <li>
          <Button title='Contact Us' link='/contact' />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
