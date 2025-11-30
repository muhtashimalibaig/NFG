// components/ContactSection.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className='py-16 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <div className='flex flex-col justify-center space-y-6'>
          <h2 className='text-4xl font-bold text-primary'>Get in Touch</h2>
          <p className='text-gray-600'>
            Have questions? Want to work together? Fill out the form or contact
            us directly.
          </p>

          <div className='space-y-4'>
            <div className='flex items-center gap-4 text-gray-700'>
              <Mail className='w-6 h-6 text-primary' />
              <span>contact@yourbrand.com</span>
            </div>
            <div className='flex items-center gap-4 text-gray-700'>
              <Phone className='w-6 h-6 text-primary' />
              <span>+92 300 1234567</span>
            </div>
            <div className='flex items-center gap-4 text-gray-700'>
              <MapPin className='w-6 h-6 text-primary' />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6'>
          <div>
            <label className='block text-gray-200 mb-2'>Name</label>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none dark:bg-gray-900 dark:text-white'
            />
          </div>
          <div>
            <label className='block text-gray-200 mb-2'>Email</label>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none dark:bg-gray-900 dark:text-white'
            />
          </div>
          <div>
            <label className='block text-gray-200 mb-2'>Message</label>
            <textarea
              rows={5}
              placeholder='Your Message'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none dark:bg-gray-900 dark:text-white'></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-primary hover:bg-blue-800 cursor-pointer text-white py-3 rounded-lg font-semibold transition-colors duration-300'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
