"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Beranda", path: "/" },
    { label: "Produk", path: "/produk" },
    { label: "Tentang", path: "/tentang" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle perubahan size untuk UX Navbar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav
      className={`backdrop-blur-md fixed top-0 left-0 w-full shadow-md z-50 ${
        isOpen ? `bg-white` : `bg-white/20`
      } transition-colors duration-300`}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold">Nosora Dummy Store</h1>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-700 rounded my-1.5 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 text-xl">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link className="hover:text-red-500 transition-colors duration-300" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full transition-all duration-300 border-t-1 border-black ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-lg bg-white shadow-md">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link className="hover:text-red-500 transition-colors duration-300" to={item.path} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
