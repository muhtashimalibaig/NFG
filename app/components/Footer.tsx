import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 mt-10'>
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Brand */}
        <div>
          <h2 className='text-2xl font-bold tracking-wide'>NFG</h2>
          <p className='text-gray-400 mt-2 text-sm'>
            Nawab Fashion Garments — Premium Men’s Clothing with the latest
            seasonal trends and unbeatable quality.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4'>
            <a href='#' className='hover:text-primary transition'>
              <Facebook size={22} />
            </a>
            <a href='#' className='hover:text-primary transition'>
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='font-semibold text-lg mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-gray-300 text-sm'>
            <li>
              <Link href='/about' className='hover:text-primary transition'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/shop' className='hover:text-primary transition'>
                Shop
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-primary transition'>
                Contact
              </Link>
            </li>
            <li>
              <Link href='/offers' className='hover:text-primary transition'>
                Seasonal Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className='font-semibold text-lg mb-3'>Customer Service</h3>
          <ul className='space-y-2 text-gray-300 text-sm'>
            <li>
              <Link
                href='/shipping-policy'
                className='hover:text-primary transition'>
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link href='/returns' className='hover:text-primary transition'>
                Return Policy
              </Link>
            </li>
            <li>
              <Link href='/faq' className='hover:text-primary transition'>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='font-semibold text-lg mb-3'>Contact Us</h3>
          <ul className='text-gray-300 space-y-2 text-sm'>
            <li className='flex items-center gap-2'>
              <Phone size={18} /> +92 300 1234567
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={18} /> support@nfgfashion.com
            </li>
          </ul>
        </div>
      </div>

      <div className='text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4'>
        © {new Date().getFullYear()} NFG – Nawab Fashion Garments. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
