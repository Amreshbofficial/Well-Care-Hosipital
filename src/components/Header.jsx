import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Consultants', path: '/consultants' },
    { name: 'Services', path: '/services' },
    { name: 'Hospital Details', path: '/hospital-details' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Topbar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <a href="tel:+914312742111" className="flex items-center text-sm">
              <FaPhone className="mr-2" /> +91 431 274 2111
            </a>
            <a href="mailto:info@wellcarehospital.net" className="flex items-center text-sm">
              <FaEnvelope className="mr-2" /> info@wellcarehospital.net
            </a>
          </div>
          <Link to="/book-appointment" className="btn-secondary text-sm">
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-primary-600 text-white font-bold text-2xl px-3 py-2 rounded">
                WH
              </div>
              <div className="ml-3">
                <div className="font-bold text-xl text-gray-900">Wellcare Hospital</div>
                <div className="text-xs text-gray-600">& Research Institute</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium ${
                    location.pathname === item.path
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Login Button */}
            <div className="hidden lg:flex items-center">
              <button className="flex items-center text-gray-700 hover:text-primary-600">
                <FaUser className="mr-2" /> Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium py-2 ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="flex items-center text-gray-700 pt-2">
                  <FaUser className="mr-2" /> Login
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;