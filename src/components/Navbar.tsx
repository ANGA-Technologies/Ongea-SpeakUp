import React, { useState } from 'react';
import {  as Menu,  as X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Programs', href: '#programs' },
    { name: 'Team', href: '#team' },
    { name: 'Clients', href: '#clients' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-white">
                ON<span className="text-maroon-500">GEA</span>
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-maroon-500 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-maroon-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-maroon-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-maroon-600/20">
                Register Now
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-maroon-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-maroon-500 block px-3 py-2 text-base font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-maroon-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-maroon-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-maroon-600/20 mt-4">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
