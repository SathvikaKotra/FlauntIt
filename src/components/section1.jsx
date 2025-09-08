import React from "react";
import model1 from "../assets/model1.jpeg";
import model2 from "../assets/model2.jpeg";

const Section1 = () => {
  return (
    <section className="relative min-h-screen px-4 bg-white text-center overflow-hidden">
      {/* Subheading */}
      <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 pt-12">
        Our Story
      </p>

      {/* Main Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold italic mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <span className="tracking-wide">Timeless Elegance</span>
      </h2>

      {/* Image Grid - absolutely centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <img
            src={model1}
            alt="Model 1"
            className="w-full h-auto object-cover rounded"
          />
          <img
            src={model2}
            alt="Model 2"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
