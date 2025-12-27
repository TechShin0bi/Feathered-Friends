import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    inStock: boolean;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, quantity, image, inStock } = item;

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100">
        <Image
          src={image || '/assets/images/placeholder-bird.jpg'}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">
            {name}
          </h3>
          <p className="ml-4 text-sm font-medium text-gray-900">
            ${price.toFixed(2)}
          </p>
        </div>
        
        <div className="mt-1 text-sm text-gray-500">
          {inStock ? (
            <span className="text-emerald-600">In Stock</span>
          ) : (
            <span className="text-amber-600">Out of Stock</span>
          )}
        </div>
        
        <div className="mt-2 flex items-center">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button
              onClick={() => updateQuantity(id, quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(id)}
            className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
