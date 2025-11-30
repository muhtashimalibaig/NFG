import React from "react";
import Image from "next/image";
import hotProductImage from "../../public/ChatGPT Image Oct 26, 2025, 12_32_44 AM.png";
import BrandName from "./BrandName";
import Button from "./Button";
const HotProduct = () => {
  return (
    <>
      <div className='my-32 px-32'>
        <h1 className='text-3xl font-bold tracking-tighter text-center'>
          Hot Product Component
        </h1>
        <div className='flex gap-10 mt-10'>
          {/* Left Image Section */}
          <div className='relative'>
            <Image
              src={hotProductImage}
              alt='Hot Image'
              className='w-[600px] h-[600px] object-cover'
            />
            <span className='absolute top-2.5 left-2 bg-orange-500 text-white font-bold tracking-tighter px-2 py-1 rounded-full'>
              Hot Offer
            </span>
          </div>
          {/* Right Content Section */}
          <div>
            <h1 className='text-2xl font-semibold tracking-tighter'>
              Premium Black Leather Puffer Jacket – Winter Collection|
              <br />
              <BrandName />
            </h1>
            <p className='mt-5 text-gray-700'>
              <h4 className='text-primary font-bold'>Our Features:</h4>
              <ul className='list-disc'>
                <li>High-quality faux leather material for a premium look</li>
                <li>Comfortable padded body for winter warmth</li>
                <li>Stylish zip-closure with smooth and durable zipper</li>
                <li>Soft inner lining for a cozy experience</li>
                <li>Ribbed cuffs and waistband for a snug fit</li>
                <li>Two secure zip pockets for essentials</li>
                <li>Trendy black color suitable for all outfits</li>
                <li>Lightweight yet warm — perfect for everyday winter wear</li>
              </ul>
            </p>
            <Button
              title='View All Products'
              link='/'
              className='mt-7 inline-block'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotProduct;
