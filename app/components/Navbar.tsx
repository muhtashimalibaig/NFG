"use client";

import Link from "next/link";
import Button from "./Button";
import { ShoppingCart, Menu, X } from "lucide-react";
import BrandName from "./BrandName";
import { useContext, useState } from "react";
import Cart from "./Cart";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const cartContext = useContext(CartContext);
  const cart = cartContext?.cart ?? [];

  return (
    <nav className='bg-white border-b-2 border-light px-6 md:px-12 py-4 flex justify-between items-center relative'>
      {/* Logo */}
      <Link href='/' className='font-extrabold text-2xl tracking-tighter'>
        <span className='text-primary'>NFG</span>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-8 items-center'>
        <li>
          <Link href='/about' className='hover:text-primary'>
            About
          </Link>
        </li>
        <li>
          <Link href='/products' className='hover:text-primary'>
            Products
          </Link>
        </li>
        <li className='relative'>
          <button
            className='relative hover:text-primary'
            onClick={() => setOpenCart(true)}>
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full'>
                {cart.length}
              </span>
            )}
          </button>
          {openCart && (
            <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
          )}
        </li>
        <li>
          <Button title='Contact Us' link='/contact' />
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className='flex items-center gap-4 md:hidden'>
        {/* Mobile Cart Button always visible */}
        <button
          className='relative hover:text-primary'
          onClick={() => setOpenCart(true)}>
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full'>
              {cart.length}
            </span>
          )}
        </button>

        {/* Hamburger menu */}
        <button className='z-20' onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 md:hidden flex flex-col p-6 gap-6 z-20 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
          className='flex justify-end'
          onClick={() => setMobileMenu(false)}>
          <X />
        </button>
        <Link href='/about' className='hover:text-primary'>
          About
        </Link>
        <Link href='/products' className='hover:text-primary'>
          Products
        </Link>
        <Button title='Contact Us' link='/contact' />
      </div>

      {/* Mobile Cart Modal */}
      {openCart && (
        <Cart isOpen={openCart} onClose={() => setOpenCart(false)} />
      )}
    </nav>
  );
};

export default Navbar;
