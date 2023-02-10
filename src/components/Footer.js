import React from "react";
import logo from '../assets/little-lemon-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[var(--highlight-light)] text-white py-4">
      <div className="container mx-auto flex items-center justify-center gap-6">
        <img src={logo} alt="Restaurant logo" className="w-32" />
        <div className="text-sm text-black font-semibold">
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer;