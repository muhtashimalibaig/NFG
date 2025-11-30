import Link from "next/link";
import React from "react";

interface IButtonProps {
  title: string;
  link: string;
  className?: string; // <-- optional className
}

const Button = ({ title, link, className }: IButtonProps) => {
  return (
    <Link
      href={link.toLowerCase()}
      className={`bg-primary text-white px-10 py-2 hover:bg-transparent hover:border-2 hover:border-primary hover:text-black transition-colors font-semibold ${
        className || ""
      }`}>
      {title}
    </Link>
  );
};

export default Button;
