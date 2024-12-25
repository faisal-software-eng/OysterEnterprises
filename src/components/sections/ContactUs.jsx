import React, { useState, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_36a2ahk', // Replace with your EmailJS service ID
        'template_o8y7lwx', // Replace with your EmailJS template ID
        form.current,
        '8vqIq-ToZTrS_xtNb' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    { icon: <FaFacebookF />, link: '#', label: 'Facebook' },
    { icon: <FaTwitter />, link: '#', label: 'Twitter' },
    { icon: <FaInstagram />, link: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, link: '#', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Information</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <div className="bg-blue-50 p-3 rounded-full w-full h-full flex items-center justify-center">
                    <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed text-left">
                    564, 1st Floor, Santoshi Chawla,
                    Mukund Nagar, Opp. Taj
                    Building, Dharavi, Mumbai
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <div className="bg-blue-50 p-3 rounded-full w-full h-full flex items-center justify-center">
                    <FaPhone className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-medium text-gray-900">Phone Number</h3>
                  <a
                    href="tel:+917021006692"
                    className="mt-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
                  >
                    +91 7021006692
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <div className="bg-blue-50 p-3 rounded-full w-full h-full flex items-center justify-center">
                    <FaEnvelope className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-medium text-gray-900">Email Address</h3>
                  <a
                    href="mailto:oyster.enterprises@gmail.com"
                    className="mt-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
                  >
                    oyster.enterprises@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 mt-6 border-t">
                <h3 className="text-lg font-medium text-gray-900 text-center mb-6">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="bg-gray-100 p-3 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
