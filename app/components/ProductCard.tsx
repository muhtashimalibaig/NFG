// components/ProductCard.jsx
import React from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  images: any;
}
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  images,
}) => {
  return (
    <div className='max-w-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
      {/* Product Image Placeholder */}
      <div className='w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
        <Image src={images} alt='title' />
      </div>

      {/* Product Details */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-primary mb-2'>{title}</h3>
        <p className=' dark: mb-4'>{description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-lg font-semibold text-primary'>
            PKR {price}
          </span>
          <button className='flex items-center gap-2 bg-primary hover:bg-blue-800 cursor-pointer text-white px-4 py-2 rounded-lg transition-colors duration-300'>
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
