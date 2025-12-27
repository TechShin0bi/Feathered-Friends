
import { Button } from '@/components/ui/Button';
import { Bird, Home, Search } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Bird className="h-24 w-24 text-emerald-600 mx-auto animate-bounce" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">404</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Oops! <span className="text-emerald-600">Page Not Found</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            The page you're looking for seems to have flown the coop. Don't worry, we'll help you find your way back to the nest!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
              <Link href="/products" className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Browse Products
              </Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-4">
              Try searching our website or check out these popular pages:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/products" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors text-emerald-700 font-medium">
                Shop Parrots
              </Link>
              <Link href="/about" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors text-emerald-700 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="block p-3 rounded-lg hover:bg-emerald-50 transition-colors text-emerald-700 font-medium">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Feathered Friends. All rights reserved.</p>
      </div>
    </div>
  );
}
