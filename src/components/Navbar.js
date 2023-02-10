// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/little-lemon-logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full min-h-[60px] flex justify-between items-center absolute z-10 text-white font-semibold bg-white">
      <div>
        <img className="flex w-40 mx-6" src={logo} alt="logo"></img>
      </div>

      <ul className="hidden sm:flex text-black">
        <li className="px-4 md:px-16">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 md:px-16">
          <a href="#specials">Specials</a>
        </li>
        <li className="px-4 md:px-16">
         <Link to="/booking">Reservations</Link>
        </li>
        <li className="px-4 md:px-16">
           <a href="#order">Order</a>
        </li>
        <li className="px-4 md:px-16">
          <a href="#about">About</a>
        </li>
      </ul>

      <div className="sm:hidden z-10" onClick={handleNav}>
        {!nav ? (
          <FaBars className="mr-4 cursor-pointer text-black" />
        ) : (
          <FaTimes className="mr-4 cursor-pointer" />
        )}
      </div>

      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300  left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center">
          <li className="text-2xl py-8">
            <Link to="/">Home</Link>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">Specials</a>
          </li>
          <li className="text-2xl py-8">
            <Link to="/booking">Reservations</Link>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">Order</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
