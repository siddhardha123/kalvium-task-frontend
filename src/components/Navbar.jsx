import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-white text-xl font-semibold">
            YourLogo
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
