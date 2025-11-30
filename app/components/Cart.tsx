import React from "react";
import { X } from "lucide-react";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}
const Cart = ({ isOpen, onClose }: CartProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}></div>

      {/* Sidebar Cart */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-900 shadow-xl z-50
        p-5 flex flex-col transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className='flex items-center justify-between border-b pb-3'>
          <h2 className='text-2xl font-bold text-primary'>Your Cart</h2>
          <button
            className='text-gray-700 dark:text-gray-300 hover:text-primary'
            onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className='flex-1 overflow-y-auto mt-4 space-y-4'>
          <p className='text-gray-600 dark:text-gray-300'>
            No items added yet.
          </p>
        </div>

        {/* Footer */}
        <div className='border-t pt-3'>
          <div className='flex justify-between text-lg font-semibold text-gray-800 dark:text-white'>
            <span>Total</span>
            <span>PKR 0.00</span>
          </div>
          <button className='w-full mt-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition'>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
