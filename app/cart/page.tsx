"use client"
import Link from 'next/link';
import { ShoppingBag, ArrowLeft, Truck, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import CartItem from '@/components/cart/CartItem';
import { useCart } from '@/contexts/CartContext';



export default function CartPage() {
  const { itemCount, clearCart, cartItems, cartTotal } = useCart();
  const shipping = cartTotal > 0 ? (cartTotal > 50 ? 0 : 9.99) : 0;
  const tax = cartTotal * 0.08; // Example tax calculation
  const total = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Your cart is empty
          </h1>
          <p className="mt-2 text-gray-500">
            Looks like you haven't added any parrots to your cart yet.
          </p>
          <div className="mt-6">
            <Link href="/products">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Browse Parrots
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Shopping Cart
        </h1>

        <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <div className="flex justify-between items-center mb-4">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <p className="text-sm text-gray-500">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </p>
              <button
                onClick={clearCart}
                className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
              >
                Clear cart
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6">
              <Link href="/products" className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order Summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">${cartTotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Shipping</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Tax</dt>
                <dd className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">${total.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link href="/checkout" className="block w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center text-center text-sm text-gray-500">
              <p>
                or{' '}
                <Link
                  href="/products"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Truck className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  Free shipping on orders over $50
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  Secure checkout with SSL encryption
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
