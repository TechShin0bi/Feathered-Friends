import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-cover bg-hero bg-center h-screen flex items-center justify-center hero-image">
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Welcome to Polly's Parrot Paradise</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Explore our colorful selection of parrots and accessories and find your feathered friend today!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
