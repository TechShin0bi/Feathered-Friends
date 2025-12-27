"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OrderSuccessPage() {
  // In a real app, you might want to fetch the order details here
  // using the order ID from the URL or a query parameter

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-emerald-100 p-4">
            <CheckCircle className="h-12 w-12 text-emerald-600" aria-hidden="true" />
          </div>
        </div>
        
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Order confirmed!
        </h1>
        
        <p className="mt-4 text-lg text-gray-600">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        
        <p className="mt-2 text-gray-500">
          We've sent a confirmation email with your order details and tracking information.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products">
            <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
              Continue Shopping
              <ShoppingBag className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          
          <Link href="/account/orders">
            <Button variant="outline" className="w-full sm:w-auto">
              View Order Status
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-medium text-gray-900">What's next?</h2>
          <ul className="mt-4 space-y-4 text-sm text-gray-600">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>You'll receive a shipping confirmation email when your order is on its way.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>For any questions about your order, please contact our support team.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
