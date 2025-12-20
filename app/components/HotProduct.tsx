import React from "react";
import Image from "next/image";
import hotProductImage from "../../public/ChatGPT Image Oct 26, 2025, 12_32_44 AM.png";
import BrandName from "./BrandName";
import Button from "./Button";

const HotProduct = () => {
  return (
    <div className='my-16 md:my-32 px-4 md:px-12 lg:px-32'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-3xl font-bold tracking-tighter text-center'>
        Hot Product Component
      </h1>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 mt-10 items-center lg:items-start'>
        {/* Left Image Section */}
        <div className='relative w-full sm:max-w-md lg:max-w-[600px]'>
          <Image
            src={hotProductImage}
            alt='Hot Image'
            className='w-full h-auto sm:h-[640px] object-cover rounded-lg'
          />
          <span className='absolute top-2.5 left-2 bg-orange-500 text-white font-bold tracking-tighter px-2 py-1 rounded-full text-sm sm:text-base'>
            Hot Offer
          </span>
        </div>

        {/* Right Content Section */}
        <div className='flex-1'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold tracking-tighter'>
            Premium Black Leather Puffer Jacket – Winter Collection |{" "}
            <BrandName />
          </h2>

          <div className='mt-5 text-gray-700 space-y-3'>
            <h4 className='text-primary font-bold'>Our Features:</h4>
            <ul className='list-disc list-inside space-y-1'>
              <li>High-quality faux leather material for a premium look</li>
              <li>Comfortable padded body for winter warmth</li>
              <li>Stylish zip-closure with smooth and durable zipper</li>
              <li>Soft inner lining for a cozy experience</li>
              <li>Ribbed cuffs and waistband for a snug fit</li>
              <li>Two secure zip pockets for essentials</li>
              <li>Trendy black color suitable for all outfits</li>
              <li>Lightweight yet warm — perfect for everyday winter wear</li>
            </ul>
          </div>

          <Button
            title='View All Products'
            link='/products'
            className='mt-6 inline-block'
          />
        </div>
      </div>
    </div>
  );
};

export default HotProduct;
