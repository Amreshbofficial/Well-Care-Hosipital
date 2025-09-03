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

      {/* Main Header with Doctor Image */}
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

      {/* Hero Section with Doctor and Stethoscope */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        {/* Doctor Illustration */}
        <div className="absolute right-0 bottom-0 w-1/3 lg:w-1/4 opacity-90">
          <svg viewBox="0 0 500 500" className="w-full h-auto">
            <path d="M350,300c-20-30-50-50-80-60c-10-3-20-5-30-5c-20,0-40,5-60,15c-15,7-30,20-40,35c-7,10-12,25-12,40
              c0,25,15,45,35,55c15,7,35,10,55,5c20-5,40-15,55-30c10-10,20-25,25-40c3-10,5-20,5-30C355,320,353,310,350,300z" fill="#ffffff"/>
            <path d="M250,150c-30,0-55,25-55,55c0,30,25,55,55,55c30,0,55-25,55-55C305,175,280,150,250,150z" fill="#ffffff"/>
            <path d="M200,250c-5,0-10,5-10,10c0,5,5,10,10,10c5,0,10-5,10-10C210,255,205,250,200,250z" fill="#0c4a6e"/>
            <path d="M300,250c-5,0-10,5-10,10c0,5,5,10,10,10c5,0,10-5,10-10C310,255,305,250,300,250z" fill="#0c4a6e"/>
            <path d="M230,290c0,5,5,10,10,10h20c5,0,10-5,10-10c0-5-5-10-10-10h-20C235,280,230,285,230,290z" fill="#0c4a6e"/>
            {/* Stethoscope */}
            <path d="M180,220c-10,0-20,5-25,15c-5,10-5,20,0,30c5,10,15,15,25,15" stroke="#ffffff" strokeWidth="8" fill="none"/>
            <circle cx="155" cy="265" r="10" fill="#ffffff"/>
            <path d="M150,265h-30c-5,0-10-5-10-10v-70c0-5,5-10,10-10h70c5,0,10,5,10,10v20" stroke="#ffffff" strokeWidth="5" fill="none"/>
          </svg>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Care. Trusted Hands.
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We provide compassionate, advanced medical care 24/7. Our team of experienced 
              healthcare professionals is dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-appointment" className="btn-primary text-center">
                Book Appointment
              </Link>
              <Link to="/departments" className="btn-secondary text-center">
                Our Departments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;