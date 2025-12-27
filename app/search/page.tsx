'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { parrots_data } from '@/public/data/parrots';
import { ParrotType } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ParrotType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get search query from URL and perform search
  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    if (query) {
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = (query: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const results = parrots_data.filter(parrot =>
        parrot.name.toLowerCase().includes(query.toLowerCase()) ||
        (parrot.breed && parrot.breed.toLowerCase().includes(query.toLowerCase())) ||
        (parrot.scientificName && parrot.scientificName.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for birds..."
              className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </form>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : searchQuery ? (
          <>
            <h2 className="text-2xl font-bold mb-6">
              {searchResults.length} results for "{searchQuery}"
            </h2>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((parrot) => (
                  <Link 
                    key={parrot.id} 
                    href={`/products/${parrot.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={parrot.image}
                          alt={parrot.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {parrot.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{parrot.breed}</p>
                        <p className="text-primary font-bold mt-2">${parrot.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-gray-400 mt-2">Try different keywords or check the spelling</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500">Search for birds by name, breed, or scientific name</p>
          </div>
        )}
      </div>
    </div>
  );
}