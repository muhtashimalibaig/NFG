import Link from "next/link";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 md:px-12 py-6 border-b-2 border-light'>
      {/* Logo */}
      <Link href='/' className='font-extrabold text-2xl tracking-tighter'>
        <span className='text-primary'>N</span>awab{" "}
        <span className='text-primary'>F</span>ashion{" "}
        <span className='text-primary'>G</span>arments
      </Link>

      {/* Menu */}
      <ul className='hidden md:flex gap-8 items-center'>
        <li>
          <Link
            href='/about'
            className='hover:text-primary transition-all focus:outline-none focus:text-primary hover:underline'>
            About
          </Link>
        </li>
        <li>
          <Link
            href='/products'
            className='hover:text-primary transition-all focus:outline-none focus:text-primary hover:underline'>
            Products
          </Link>
        </li>
        <li>
          <Link
            href='/testimonials'
            className='hover:text-primary transition-all focus:outline-none focus:text-primary hover:underline'>
            Testimonials
          </Link>
        </li>
        <li>
          <button className='relative hover:text-primary transition-all'>
            <ShoppingCart size={24} />

            {/* Badge */}
            <span className='absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full'>
              0
            </span>
          </button>
        </li>
        <li>
          <Button title='Contact Us' link='/contact' />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
