"use client";

import { logo } from '@/public/assets';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { Menu, Search, ShoppingCart, User, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { cartItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLink {
    name: string;
    href: any;
    submenu?: Array<{
      name: string;
      href: any;
    }>;
  }

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Shop',
      href: '/products',
      submenu: [
        { name: 'All Birds', href: '/products' },
        { name: 'Popular Breeds', href: '/products?filter=popular' },
        { name: 'New Arrivals', href: '/products?filter=new' },
        { name: 'On Sale', href: '/products?filter=sale' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Care Guide', href: '/care-guide' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isSticky
        ? 'bg-white/95 shadow-md backdrop-blur-sm'
        : isScrolled
          ? 'bg-white/80 backdrop-blur-sm'
          : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Feathered Friends"
                className="h-12 w-12 rounded-full"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Feathered <span className="text-emerald-600">Friends</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === item.href
                      ? 'text-emerald-600'
                      : 'text-gray-700 hover:text-emerald-600'
                    }`}
                >
                  <div className="flex items-center">
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </div>
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center">
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen) setSearchQuery('');
                }}
                className="p-2 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
                aria-label={isSearchOpen ? 'Close search' : 'Search'}
              >
                {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.form
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '200px' }}
                    exit={{ opacity: 0, width: 0 }}
                    onSubmit={handleSearch}
                    className="flex items-center overflow-hidden"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search birds..."
                      className="px-3 py-1 border-b border-gray-300 focus:outline-none focus:border-emerald-600 w-full"
                    />
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/cart"
              className="p-2 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-gray-100 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
            <Link
              href={"/account" as unknown as Record<string, unknown>}
              className="p-2 rounded-full text-gray-600 hover:text-emerald-600 hover:bg-gray-100 transition-colors hidden sm:inline-flex"
            >
              <User className="h-5 w-5" />
            </Link>
            <div className="hidden md:block ml-2">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                      ? 'bg-gray-100 text-emerald-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-200 mt-2">
              <Button className="w-full justify-center" size="sm">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;