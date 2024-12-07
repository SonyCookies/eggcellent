"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full text-white h-20 top-0 z-50 transition-all duration-300`}
      style={{
        backgroundImage: isScrolled
          ? "url('/images/header-background.svg')"
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
      }}
    >
      <div className="container mx-auto flex justify-between items-center align-baseline py-4 px-4 relative h-full">
        {/* Logo */}
        <div>
          <h1>My Logo</h1>
        </div>
        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
