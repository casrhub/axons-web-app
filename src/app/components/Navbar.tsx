"use client"
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import axons from "../images/axons.png"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";



const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Study' },
    { id: 2, text: 'Feedbacks' },  
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-[#111827] flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white'>

      {/* Logo */}
    <div className="flex items-center">
        <Image src={axons} alt="Description of the image" width={50} height={50} />
        <a href='#' className="ml-2">Axons</a>
    </div>


      {/*Edited Julian */}
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
      {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#312e81] rounded-xl m-2 cursor-pointer duration-300 hover:text-indigo-400'
          >
            {item.text === 'About' ? (
              <Link href="/about_us">
                {item.text}
              </Link>
            ) : item.text === 'Feedbacks' ? (
              <Link href="/Feedbacks_hist">
                {item.text}
              </Link>
            ): item.text === 'Contact' ? (
              <Link href="/contact_us">
                {item.text}
              </Link>
            ) : item.text === 'Study' ? (
              <Link href="/">
                {item.text}
              </Link>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
      ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className="flex items-center">
        <Image src={axons} alt="Description of the image" width={30} height={30} />
        <a href='#' className="ml-2">Axons</a>
    </div>


        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#312e81] rounded-xl m-2 cursor-pointer duration-300 hover:text-indigo-400'
          >
            {item.text === 'About' ? (
              <Link href="/about_us">
                {item.text}
              </Link>
            ) : item.text === 'Feedbacks' ? (
              <Link href="/Feedbacks_hist">
                {item.text}
              </Link>
            ): item.text === 'Contact' ? (
              <Link href="/contact_us">
                {item.text}
              </Link>
            ) : item.text === 'Study' ? (
              <Link href="/">
                {item.text}
              </Link>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;