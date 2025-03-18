import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-maroon-600 dark:text-maroon-400 hover-scale">ONGEA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link dark:text-gray-300">Home</a>
            <a href="#about" className="nav-link dark:text-gray-300">About</a>
            <a href="#services" className="nav-link dark:text-gray-300">Services</a>
            <a href="#team" className="nav-link dark:text-gray-300">Team</a>
            <a href="#contact" className="nav-link dark:text-gray-300">Contact</a>
            <ThemeToggle />
            <button className="button-primary">
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-maroon-600 dark:hover:text-maroon-400 transition-custom"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <a href="#home" className="block px-3 py-2 nav-link dark:text-gray-300">Home</a>
            <a href="#about" className="block px-3 py-2 nav-link dark:text-gray-300">About</a>
            <a href="#services" className="block px-3 py-2 nav-link dark:text-gray-300">Services</a>
            <a href="#team" className="block px-3 py-2 nav-link dark:text-gray-300">Team</a>
            <a href="#contact" className="block px-3 py-2 nav-link dark:text-gray-300">Contact</a>
            <button className="w-full mt-2 button-primary">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;