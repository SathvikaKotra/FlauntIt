// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Section1 from "./components/section1";
import Section2 from "./components/section2";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#fee2e6]">
        <Navbar />

       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<h1 className="p-6 text-2xl">About Page</h1>}
          />
          <Route
            path="/products"
            element={<h1 className="p-6 text-2xl">Products Page</h1>}
          />
          <Route
            path="/contact"
            element={<h1 className="p-6 text-2xl">Contact Page</h1>}
          />
          <Route
            path="/shop"
            element={<h1 className="p-6 text-2xl">Shop Page</h1>}
          />
        </Routes> 
        {/* Section1 appears on all pages */}
        <Section1/>
        <Section2/>
      </div>
    </Router>
  );
};

export default App;

