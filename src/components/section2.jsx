import React from "react";
// import planter from "../assets/planter.jpg";
// import alarmClock from "../assets/alarm-clock.jpg";
// import perfume from "../assets/perfume.jpg";
// import handbag from "../assets/handbag.jpg";

const Section2 = () => {
  return (
    <section className=" bg-white h-screen items-center text-center max-w-7xl mx-auto">
      {/* Subheading */}
      <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
        Featured Products
      </p> 

      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold italic mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Everyday Essentials
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Product 1 */}
        <div className="flex flex-col items-center">
          <img src="https://ik.imagekit.io/2xkwa8s1i/img/NPL_Plastic_Planters/WPOPLBOFPPLMCS3/WPOPLBOFPPLMCS3_1.jpg?tr=w-3840" alt="Eco-Friendly Planter" className="w-32 h-40 object-contain mb-4" />
          <p className="font-mono text-sm font-semibold mb-1">Eco-Friendly Planter</p>
          <p className="font-mono text-xs text-gray-600 mb-0.5">Elevate Your Space</p>
          <p className="font-mono text-xs text-gray-600">Bring Nature Home</p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center">
          <img src="https://i.pinimg.com/originals/c9/80/70/c980706458ab0945878faf392fc6d31a.jpg" alt="Stylish Alarm Clock" className="w-32 h-40 object-contain mb-4" />
          <p className="font-mono text-sm font-semibold mb-1">Stylish Alarm Clock</p>
          <p className="font-mono text-xs text-gray-600 mb-0.5">Wake Up in Style</p>
          <p className="font-mono text-xs text-gray-600">Time to Accessorize</p>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center">
          <img src="https://i.pinimg.com/originals/29/b1/5a/29b15a06d30397e8ed3ac460032321d7.jpg" alt="Luxurious Perfume" className="w-32 h-40 object-contain mb-4" />
          <p className="font-mono text-sm font-semibold mb-1">Luxurious Perfume</p>
          <p className="font-mono text-xs text-gray-600 mb-0.5">Fragrance for the Soul</p>
          <p className="font-mono text-xs text-gray-600">Indulge Your Senses</p>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center">
          <img src="https://i.pinimg.com/474x/91/8d/4f/918d4fbc8a5bafb024cd84f687158acf.jpg" alt="Sophisticated Handbag" className="w-32 h-40 object-contain mb-4" />
          <p className="font-mono text-sm font-semibold mb-1">Sophisticated Handbag</p>
          <p className="font-mono text-xs text-gray-600 mb-0.5">Elevate Your Look</p>
          <p className="font-mono text-xs text-gray-600">Timeless Accessory</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
