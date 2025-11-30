import React from "react";
import BannerImage from "../../public/Banner.jpg";
import BrandName from "./BrandName";
import Button from "./Button";
import { ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <div
      className='relative w-full h-[85vh] bg-cover bg-center'
      style={{
        backgroundImage: `url(${BannerImage.src})`,
      }}>
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/70'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-wide uppercase'>
          <span className='text-primary'>NFG</span> - <BrandName />
        </h1>

        <p className='mt-4 text-lg md:text-2xl font-medium max-w-2xl text-gray-400'>
          Premium Men’s Clothing — Latest Seasonal Offers & Trendy Styles
        </p>
        <div className='flex gap-5 mt-5'>
          <Button title='Shop Now' link='/' className='hover:text-white' />
          <button className='border flex cursor-pointer text-white px-10 py-2 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary transition-colors font-semibold'>
            Explore More <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
