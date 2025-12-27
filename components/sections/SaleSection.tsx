"use client"
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ParrotSaleItem } from '../ParrotSaleItem';
import { parrots_data } from '@/public/data/parrots';
import { PriceInput } from './PriceInput';
import { PriceRange } from '../PriceRange';

export const SaleSection = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const { itemCount } = useCart();

  const filteredParrots = parrots_data.filter(
    parrot => parrot.price >= priceRange[0] && parrot.price <= priceRange[1]
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Available Parrots</h2>
          <div className="flex items-center">
            <span className="mr-2">Cart ({itemCount})</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              <PriceRange
                min={0}
                max={5000}
                value={priceRange}
                onChange={setPriceRange}
              />
              <div className="mt-4">
                <PriceInput
                  label="Min Price"
                  value={priceRange[0]}
                  onChange={(value) => setPriceRange([value, priceRange[1]])}
                />
                <PriceInput
                  label="Max Price"
                  value={priceRange[1]}
                  onChange={(value) => setPriceRange([priceRange[0], value])}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParrots.map((parrot) => (
                <ParrotSaleItem
                  inStock={parrot.inStock !== undefined ? parrot.inStock : true}
                  key={parrot.id}
                  id={parrot.id.toString()}
                  name={parrot.name}
                  price={parrot.price}
                  image={parrot.image}
                  description={parrot.description || ''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};