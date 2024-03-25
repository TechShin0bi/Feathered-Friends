import { parrot2, parrot3, parrot4, parrot5, parrot6, parrot7, parrot8, parrot9 } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MostPopularParrots: React.FC = () => {
  // Sample data of popular parrots
  const popularParrots = [
    { id: 1, name: 'African Grey Parrot', image: parrot9 },
    { id: 2, name: 'Macaw Parrot', image: parrot2 },
    { id: 3, name: 'Cockatoo Parrot', image: parrot3 },
    { id: 4, name: 'Eclectus Parrot', image: parrot4 },
    { id: 5, name: 'Amazon Parrot', image: parrot5 },
    { id: 6, name: 'Lovebird Parrot', image: parrot6 },
    { id: 7, name: 'Conure Parrot', image: parrot7 },
    { id: 8, name: 'Budgerigar Parrot', image: parrot8 },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold  text-gray-800 mb-6">Most Popular Parrots</h2>
        <div className="flex flex-wrap justify-center -mx-4 ">
          {popularParrots.map(parrot => (
            <div key={parrot.id} className="md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
              <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
                <Link href="#">
                  <Image className="w-full h-48 object-center" src={parrot.image} alt={parrot.name} />
                </Link>
                <div className="p-4 bg-white">
                  <Link href="#">
                    <h3 className="hover:underline hover:text-blue-600 text-xl font-semibold text-gray-800">{parrot.name}</h3>
                  </Link>
                  <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularParrots;
