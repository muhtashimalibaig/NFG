import Link from "next/link";
import React from "react";

interface IButtonProps {
  title: string;
  link: string;
}
const Button = ({ title, link }: IButtonProps) => {
  return (
    <>
      <Link
        href={link.toLowerCase()}
        className='bg-primary text-white px-10 py-2 hover:bg-transparent hover:border-2 hover:border-primary hover:text-black transition-colors font-semibold'>
        {title}
      </Link>
    </>
  );
};

export default Button;
