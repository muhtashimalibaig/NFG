import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Truck size={32} />,
    title: "Fast & Secured Shipping",
    desc: "Delivered to your doorstep",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "100% Quality Guaranteed",
    desc: "Premium men’s clothing",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Easy Return Policy",
    desc: "7-Day hassle-free return",
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Customer Support",
    desc: "We’re here to help",
  },
];

const Slider = () => {
  return (
    <div className='w-full py-10 bg-gray-100'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6'>
        {features.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center hover:scale-105 transition transform duration-300'>
            <div className='text-primary mb-3'>{item.icon}</div>
            <h3 className='font-bold text-lg'>{item.title}</h3>
            <p className='text-sm text-gray-600'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
