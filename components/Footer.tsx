import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-2xl font-bold">Parrot Emporium</h3>
          <p className="mt-2">Your one-stop shop for all things parrot-related!</p>
        </div>
        <nav className="flex flex-wrap justify-center lg:justify-end -mx-4">
          <a href="#" className="px-4 py-2 mx-2 rounded hover:bg-gray-600">Home</a>
          <a href="#" className="px-4 py-2 mx-2 rounded hover:bg-gray-600">Shop</a>
          <a href="#" className="px-4 py-2 mx-2 rounded hover:bg-gray-600">About Us</a>
          <a href="#" className="px-4 py-2 mx-2 rounded hover:bg-gray-600">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
