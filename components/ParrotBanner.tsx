import Image from 'next/image';
import React from 'react';

interface ParrotBannerProps {
  imageUrl: string;
  altText: string;
}

const ParrotBanner: React.FC<ParrotBannerProps> = ({ imageUrl, altText }) => {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-80 xl:h-96 overflow-hidden bg-white py-10">
      <Image
        src={imageUrl}
        alt={altText}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to our Parrot Paradise!
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">
          Find your feathered friend here.
        </p>
      </div>
    </div>
  );
};

export default ParrotBanner;
