import React from 'react';
import { Headset, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-24" style={{ backgroundImage: "url('../src/assets/images/skyjourney-banner.jpg')" }}>
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Flight</h1>
        <p className="text-xl md:text-1xl mb-8 max-w-lg">
          Discover amazing destinations at unbeatable prices. Your journey starts here.
        </p>
     
      </div>
    </section>
  );
};

export default Hero;