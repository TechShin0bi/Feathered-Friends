// app/products/[id]/EnhancedProductDetail.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Bird, Check, Heart, ShoppingCart, Star, Truck, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { parrots_data } from '@/public/data/parrots';
import { ParrotType } from '@/types/common';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

export default function EnhancedProductDetail() {
  const router = useRouter();
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ParrotType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const productData = parrots_data.find(parrot => parrot.id === Number(id));

        if (productData) {
          setProduct(productData);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    setIsAddingToCart(true);
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      inStock: product.inStock
    });
    setShowAddedToCart(true);

    setTimeout(() => {
      setShowAddedToCart(false);
      setIsAddingToCart(false);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-sm mx-4 bg-white rounded-xl shadow-sm">
          <Bird className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Bird Not Found</h2>
          <p className="text-gray-500 mb-4">We couldn't find the product you're looking for.</p>
          <Button
            onClick={() => router.push('/')}
            className="mt-2"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span>Back</span>
        </motion.button>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Product Image */}
          <motion.div
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          // variants={fadeIn}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-6"
          // variants={fadeIn}
          >
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              variants={cardVariants}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-gray-500 italic">{product.scientificName}</p>
                  {product.breed && (
                    <span className="inline-block mt-2 px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-full">
                      {product.breed}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${star <= Math.floor(product.rating || 0)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                        }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {(product.rating || 0).toFixed(1)} ({product.reviews || 0} reviews)
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Description Card */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              variants={cardVariants}
            >
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              variants={cardVariants}
            >
              <h2 className="text-lg font-semibold mb-4">Quick Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Breeder', value: product.breeder },
                  { label: 'Location', value: product.location },
                  { label: 'Age', value: `${product.age.value} ${product.age.unit}` },
                  { label: 'Gender', value: product.gender },
                  { label: 'Color', value: product.color },
                  { label: 'Size', value: product.size },
                  { label: 'Weight', value: product.weight },
                  { label: 'Diet', value: product.diet },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-500 w-28 flex-shrink-0">{item.label}:</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Add to Cart Card */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm sticky bottom-0"
              variants={cardVariants}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden w-full sm:w-auto">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-200 text-center w-12">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  size="lg"
                  className={`
    flex-1 relative overflow-hidden rounded-xl font-semibold
    transition-all duration-300 ease-out
    ${showAddedToCart
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-primary hover:bg-primary/90'
                    }
    disabled:cursor-not-allowed disabled:opacity-90
    shadow-sm hover:shadow-md
  `}
                >
                  <span
                    className={`
      flex items-center justify-center gap-2
      transition-opacity duration-200
      ${isAddingToCart ? 'opacity-70' : 'opacity-100'}
    `}
                  >
                    {isAddingToCart ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                        <span>Adding…</span>
                      </>
                    ) : showAddedToCart ? (
                      <>
                        <Check className="h-5 w-5" />
                        <span>Added to cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />
                        <span>
                          Add to cart
                          <span className="ml-2 text-sm font-normal opacity-80">
                            ${(product.price * quantity).toFixed(2)}
                          </span>
                        </span>
                      </>
                    )}
                  </span>
                </Button>

              </div>

              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Truck className="h-4 w-4 mr-2 text-green-500" />
                <span>Free shipping on orders over $100</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}