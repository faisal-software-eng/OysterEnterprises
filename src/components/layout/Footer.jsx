import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
    ],
    products: [
      { name: 'Categories', href: '#products' },
      { name: 'New Arrivals', href: '#new-arrivals' },
      { name: 'Best Sellers', href: '#' },
    ],
    support: [
      { name: 'FAQs', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Returns', href: '#' },
    ],
    social: [
      { icon: <FaFacebookF />, name: 'Facebook', href: '#' },
      { icon: <FaInstagram />, name: 'Instagram', href: 'https://www.instagram.com/oysterenterprises11?igsh=Z2U2ZmJvZDJyN3g0' },
      { icon: <FaTwitter />, name: 'Twitter', href: '#' },
      { icon: <FaLinkedinIn />, name: 'LinkedIn', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 text-center">
          <Link to="/" className="mb-4 sm:mb-6">
            <img src={logo} alt="Oyster Enterprises Logo" className="h-16 sm:h-20 w-auto" />
          </Link>
          <p className="max-w-md text-gray-400 text-sm px-4">
            Your trusted partner for high-quality textile accessories. We specialize in belts, drawcords, badges, and more, delivering excellence in every product.
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 justify-center sm:justify-start">
                <FaMapMarkerAlt className="mr-3 text-blue-400 flex-shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center text-gray-400 justify-center sm:justify-start">
                <FaPhone className="mr-3 text-blue-400 flex-shrink-0" />
                <a href="tel:+917977011525" className="hover:text-white transition-colors duration-300">
                  +91 777011525
                </a>
              </li>
              <li className="flex items-center text-gray-400 justify-center sm:justify-start">
                <FaEnvelope className="mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:oyster.enterprises@gmail.com" className="hover:text-white transition-colors duration-300 break-all sm:break-normal">
                  oyster.enterprises@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {footerLinks.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs sm:text-sm text-center px-4">
            &copy; {new Date().getFullYear()} Oyster Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
