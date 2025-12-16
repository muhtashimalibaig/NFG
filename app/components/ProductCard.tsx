"use client";
import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import CartContext from "../context/CartContext";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  images,
}) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cart, addToCart } = cartContext;

  const isAdded = cart.some((item) => item.id === id);
  console.log("isAdded:", isAdded);
  const cartItem = cart.find((item) => item.id === id);
  console.log("cartItem:", cartItem);

  return (
    <div className='max-w-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
      <div className='w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
        <Image src={images} alt={title} />
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold text-primary mb-2'>{title}</h3>
        <p className='mb-4'>{description}</p>

        <div className='flex items-center justify-between'>
          <span className='text-lg font-semibold text-primary'>
            PKR {price}
          </span>

          <button
            disabled={isAdded}
            onClick={() => addToCart({ id, title, price, images })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
              ${
                isAdded
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-blue-800 text-white"
              }`}>
            <ShoppingCart size={18} />
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
