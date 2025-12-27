"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Feather } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen bg-hero bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-emerald-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${6 + Math.random() * 10}s linear infinite`,
            }}
          >
            <Feather size={24 + Math.random() * 30} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full backdrop-blur-sm">
            Welcome to Feathered Friends
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your Perfect <span className="text-emerald-400">Feathered</span> Companion
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore our exclusive collection of hand-raised parrots and premium bird care products. 
            Each of our feathered friends is raised with love and care, ready to bring joy to your home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <span>Shop Parrots</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white border-2 border-white/20 hover:border-emerald-400 rounded-full transition-all duration-300 hover:text-emerald-400"
            >
              <span>Learn More</span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-6 text-gray-400">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-gray-800 bg-gray-700" />
                ))}
              </div>
              <span className="ml-3 text-sm">
                Join <span className="font-semibold text-emerald-400">500+</span> happy bird owners
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-10 h-16 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1 h-4 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
