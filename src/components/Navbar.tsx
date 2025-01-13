import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Menu, X, ChevronDown } from 'lucide-react';
import AagamLogo from '../assets/aagam_group_logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsGroupDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50">
      {/* Glassmorphism background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-md border-b border-white/20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4" ref={menuRef}>
        <div className="flex justify-between items-center h-20">
          {/* Logo with hover effect */}
          <Link to="/" className="group flex items-center space-x-2">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={AagamLogo} 
                className="h-20 w-auto object-contain transform transition-transform group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>

          {/* Desktop Navigation with animated underline effect */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`relative px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors duration-200
                  after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 
                  after:left-0 after:bottom-0 after:rounded-full after:transform after:scale-x-0 
                  after:transition-transform after:duration-300 hover:after:scale-x-100
                  ${isActivePath(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 
                    'text-blue-600 after:scale-x-100' : ''}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile menu button with animated icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-full hover:bg-blue-50 transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-blue-600 transform transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 transform transition-transform duration-200 hover:rotate-180" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation with staggered animation */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-b-2xl mx-4 mt-2 overflow-hidden">
            <div className="max-w-6xl mx-auto p-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Contact'].map((item, index) => (
                  <Link 
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`transform transition-all duration-300 delay-${index * 100}
                      ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}
                      px-4 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600
                      ${isActivePath(item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 
                        'bg-blue-50 text-blue-600 font-medium' : ''}`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}