import React from 'react';
import { WhatsappIcon } from 'react-share';

const products = [
  {
    id: 1,
    name: 'Canvas Belt - Premium Series',
    image: '/images/display-web/canvas-one.jpeg',
    description: 'High-quality canvas belt with durable buckle',
  },
  {
    id: 2,
    name: 'Jute Belt Collection',
    image: '/images/display-web/jute-belts-one.jpeg',
    description: 'Eco-friendly jute belt with modern design',
  },
  {
    id: 3,
    name: 'Ladies PU Belt - Designer Series',
    image: '/images/display-web/ladies-pu-belts-one.jpeg',
    description: 'Elegant PU belt for women with premium finish',
  },
  {
    id: 4,
    name: 'Silicon Badge - Custom Design',
    image: '/images/display-web/silicon-badges-one.jpeg',
    description: 'Custom silicon badge with your branding',
  }
];

const NewArrivals = () => {
  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${productName} shown on your website. Can you share more details?`
    );
    window.open(`https://wa.me/+917977011525?text=${message}`, '_blank');
  };

  return (
    <section id="new-arrivals" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            New Arrivals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out our latest products and designs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <button
                  onClick={() => handleWhatsAppClick(product.name, product.image)}
                  className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 mt-auto"
                >
                  <WhatsappIcon size={24} round />
                  <span>Contact on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
