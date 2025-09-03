import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/heroimg.png";

const Home = () => {
  return (
    <section className="bg-[#fee2e6] h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-center px-0 md:px-12">
        {/* Left Image */}
        <div className="flex-shrink-0 h-full w-1/2 md:w-[80%]">
          <img
            src={heroImg}
            alt="FlauntIt Model"
            className="h-full w-full object-cover md:object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-left pl-8 md:pl-16">
          {/* Heading */}
          <h1
            className="text-6xl md:text-7xl font-bold italic leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ELEVATE <br /> YOUR
          </h1>

          {/* Paragraph */}
          <p
            className="mt-4 text-gray-700 text-base md:text-lg max-w-md"
            style={{ fontFamily: "'Roboto Mono', monospace" }}
          >
            Welcome to <span className="font-semibold">FlauntIt</span>, where
            fashion meets creativity. Immerse yourself in our curated collection
            of chic.
          </p>

          {/* Button */}
          <Link
            to="/shop"
            className="mt-6 inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-full text-sm font-medium shadow hover:bg-gray-800 transition w-auto"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
