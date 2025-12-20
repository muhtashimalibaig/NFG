import React from "react";
import BannerImage from "../../public/Banner.jpg";
import BrandName from "./BrandName";
import Button from "./Button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className='relative w-full py-16 bg-cover'
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundPosition: "center",
      }}>
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/70'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8'>
        {/* Heading */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight md:tracking-wide uppercase leading-snug md:leading-tight'>
          <span className='text-primary'>NFG</span> - <BrandName />
        </h1>

        {/* Subtext */}
        <p className='mt-4 text-sm sm:text-base md:text-lg lg:text-2xl font-medium max-w-xl md:max-w-2xl text-gray-300'>
          Premium Men’s Clothing — Latest Seasonal Offers & Trendy Styles
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 mt-6'>
          <Button
            title='Shop Now'
            link='/products'
            className='bg-primary hover:text-white text-white hover:bg-primary/90 transition-colors font-semibold px-8 py-3 sm:px-10 sm:py-3 rounded-lg'
          />
          <Link href={'/about'} className='border border-white flex items-center justify-center gap-2 text-white px-8 py-3 sm:px-10 sm:py-3 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary transition-colors font-semibold rounded-lg'>
            Explore More <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
