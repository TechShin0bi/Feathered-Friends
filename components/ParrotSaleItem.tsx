
"use client";

import { useCart } from '@/contexts/CartContext';
import { Button } from './ui/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ParrotSaleItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

export const ParrotSaleItem = ({ id, name, price, image, description }: ParrotSaleItemProps) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the cart button
    addToCart({
      id,
      name,
      price,
      image,
      inStock: true // or use the inStock prop if it's dynamic
    });
  };

  const handleNavigateToProduct = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={handleNavigateToProduct}
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
          <Button
            onClick={handleAddToCart}
            // variant="primary"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};