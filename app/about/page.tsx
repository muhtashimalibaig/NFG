import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className='text-black py-16 px-4 sm:px-6 md:px-20'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* Left Image Section */}
        <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-lg overflow-hidden shadow-xl'>
          <Image
            src='/Banner.jpg'
            alt='NFG Fashion'
            fill
            className='object-cover'
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4'>
            About NFG
          </h2>

          <p className='text-gray-700 leading-relaxed mb-4 text-sm sm:text-base'>
            Welcome to{" "}
            <span className='font-semibold'>Nawab Fashion Garments (NFG)</span>{" "}
            — your destination for modern, stylish and premium men’s clothing.
            We focus on crafting apparel that offers exceptional comfort, bold
            appearance and long-lasting quality.
          </p>

          <p className='text-gray-700 leading-relaxed mb-6 text-sm sm:text-base'>
            From seasonal collections to trending outfits, our mission is to
            keep you looking sharp with confidence. Whether it's winter wear,
            casual daily fit or festive fashion — NFG ensures fresh style and
            unmatched value.
          </p>

          <ul className='space-y-3 text-gray-800 text-sm sm:text-base'>
            <li className='flex gap-2'>
              <span className='text-primary font-bold'>✔</span> Premium fabrics
              & durable stitching
            </li>
            <li className='flex gap-2'>
              <span className='text-primary font-bold'>✔</span> Modern fits
              designed for comfort
            </li>
            <li className='flex gap-2'>
              <span className='text-primary font-bold'>✔</span> Latest fashion
              collections for every season
            </li>
            <li className='flex gap-2'>
              <span className='text-primary font-bold'>✔</span>{" "}
              Customer-friendly pricing & offers
            </li>
          </ul>

          <Link
            href={"/products"}
            className='mt-6 inline-block sm:mt-8 bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-transparent hover:border-2 hover:border-primary hover:text-black transition w-full sm:w-auto'>
            Explore Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
