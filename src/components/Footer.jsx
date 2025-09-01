import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Wellcare Hospital</h3>
            <p className="mb-4">
              Providing quality healthcare services with compassion and excellence since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-400">Our Services</Link></li>
              <li><Link to="/departments" className="hover:text-primary-400">Departments</Link></li>
              <li><Link to="/consultants" className="hover:text-primary-400">Consultants</Link></li>
              <li><Link to="/careers" className="hover:text-primary-400">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li><Link to="/departments#cardiology" className="hover:text-primary-400">Cardiology</Link></li>
              <li><Link to="/departments#orthopedics" className="hover:text-primary-400">Orthopedics</Link></li>
              <li><Link to="/departments#neurology" className="hover:text-primary-400">Neurology</Link></li>
              <li><Link to="/departments#gynecology" className="hover:text-primary-400">Gynecology</Link></li>
              <li><Link to="/departments#pediatrics" className="hover:text-primary-400">Pediatrics</Link></li>
              <li><Link to="/departments#dermatology" className="hover:text-primary-400">Dermatology</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>123 Medical Street, Healthcare District, City, State 641001</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <a href="tel:+914312742111">+91 431 274 2111</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <a href="mailto:info@wellcarehospital.net">info@wellcarehospital.net</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wellcare Hospital & Research Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;