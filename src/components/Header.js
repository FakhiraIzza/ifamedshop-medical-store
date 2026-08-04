<<<<<<< HEAD
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="/" className="text-2xl font-bold text-indigo-600">IfaMedShop</a>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#drugsearch" className="text-gray-700 hover:text-indigo-600">Drug Search</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <a href="#features" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Features</a>
          <a href="#drugsearch" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Drug Search</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
=======
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="/" className="text-2xl font-bold text-indigo-600">IfaMedShop</a>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
          <a href="#drugsearch" className="text-gray-700 hover:text-indigo-600">Drug Search</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <a href="#features" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Features</a>
          <a href="#drugsearch" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Drug Search</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
>>>>>>> 477015b4bf5b643a3a604f5e708794bf4e4eba12
