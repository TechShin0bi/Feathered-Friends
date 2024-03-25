import { ParrotType } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { UrlObject } from 'url';


const ParrotSaleItem: React.FC<ParrotType> = ({ age, id, image, location, name, price }) => {
  const formatAge = () => {
    switch (age.unit) {
      case 'days':
        return `${age.value} ${age.value > 1 ? 'days' : 'day'}`;
      case 'weeks':
        return `${age.value} ${age.value > 1 ? 'weeks' : 'week'}`;
      case 'months':
        return `${age.value} ${age.value > 1 ? 'months' : 'month'}`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={'/products/' + id as unknown as UrlObject}>
        <Image src={image} alt={name} height={100} width={100} className="w-full h-48 object-cover hover:opacity-75" />
      </Link>
      <div className="p-4">
        <Link href={'/products/' + id as unknown as UrlObject}>
          <h2 className="hover:underline hover:text-blue-600 text-xl font-semibold mb-2 text-black">{name}</h2>
        </Link>
        <p className="text-gray-700 mb-2">${price}</p>
        <p className="text-gray-700">{formatAge()}</p>
      </div>
    </div>
  );
};

export default ParrotSaleItem;
