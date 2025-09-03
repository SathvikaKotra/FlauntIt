import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm font-semibold">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white font-bold">
            ✦
          </div>
          <span
            className="font-bold text-lg"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            FlauntIt
          </span>
        </div>

        {/* Nav Links */}
        <div
          className="flex items-center space-x-6"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-pink-600 font-medium"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Shop Button */}
          <Link
            to="/shop"
            className="px-4 py-1 border rounded-full text-sm hover:bg-pink-100 hover:border-pink-600 hover:text-pink-600 transition-colors"
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
