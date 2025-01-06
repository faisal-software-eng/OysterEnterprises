import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { WhatsappIcon } from 'react-share';

const categories = [
  {
    id: 'canvas-belts',
    name: 'Canvas Belts',
    folder: 'Canvas-belts',
    description: 'High-quality canvas belts for casual and formal wear',
    mainImage: '/images/display-web/canvas-one.jpeg',
  },
  {
    id: 'drawcords',
    name: 'Drawcords',
    folder: 'Drawcords',
    description: 'Premium drawcords for various applications',
    mainImage: '/images/display-web/Drawcords-01.jpg'
  },
  {
    id: 'flat-drawcords',
    name: 'Flat Drawcords',
    folder: 'Flat-drawcord',
    description: 'Durable flat drawcords for multiple uses',
    mainImage: '/images/display-web/flat-drawcord-one.jpeg'
  },
  {
    id: 'jute-belts',
    name: 'Jute Belts',
    folder: 'Jute-Belts',
    description: 'Eco-friendly jute belts with unique designs',
    mainImage: '/images/display-web/jute-belts-one.jpeg'
  },
  {
    id: 'keychains',
    name: 'Keychains',
    folder: 'Keychain',
    description: 'Stylish and durable keychains',
    mainImage: '/images/display-web/Keychain-01.jpg'
  },
  {
    id: 'ladies-pu-belts',
    name: 'Ladies PU Belts',
    folder: 'Ladies-PU-Belts',
    description: 'Elegant PU belts designed for women',
    mainImage: '/images/display-web/ladies-pu-belts-one.jpeg'
  },
  {
    id: 'round-drawcords',
    name: 'Round Drawcords',
    folder: 'Round-drowcord',
    description: 'Quality round drawcords for various applications',
    mainImage: '/images/display-web/Round-drowcord-01.jpeg'
  },
  {
    id: 'silicon-badges',
    name: 'Silicon Badges',
    folder: 'Silicon-badges',
    description: 'Custom silicon badges for branding',
    mainImage: '/images/display-web/silicon-badges-one.jpeg'
  },
  {
    id: 'suspenders',
    name: 'Suspenders',
    folder: 'Suspenders',
    description: 'Classic and modern suspenders',
    mainImage: '/images/display-web/suspenders-one.jpeg'
  },
  {
    id: 'twill-tape',
    name: 'Twill Tape',
    folder: 'Twill-tape',
    description: 'High-quality twill tape for various uses',
    mainImage: '/images/display-web/twill-tape-one.jpeg'
  },
  {
    id: 'woven-badges',
    name: 'Woven Badges',
    folder: 'Woven-Badges',
    description: 'Professional woven badges for branding',
    mainImage: '/images/display-web/Woven-Badges-01.jpeg'
  }
];

const CategoryCard = ({ category, onClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={category.mainImage}
        alt={category.name}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
      <button
        onClick={onClick}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        See More
      </button>
    </div>
  </div>
);

const ProductModal = ({ isOpen, onClose, category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (category) {
      // Import all images from the category folder
      const importImages = async () => {
        try {
          const imageContext = import.meta.glob('/public/images/**/*.{jpeg,jpg,png}', { eager: true });
          const categoryImages = Object.entries(imageContext)
            .filter(([path]) => path.includes(`/${category.folder}/`))
            .map(([path, module]) => ({
              path: module.default,
              name: path.split('/').pop()
            }))
            .sort((a, b) => {
              // Sort images by number in filename
              const numA = parseInt(a.name.match(/\d+/) || [0]);
              const numB = parseInt(b.name.match(/\d+/) || [0]);
              return numA - numB;
            });
          setImages(categoryImages);
        } catch (error) {
          console.error('Error loading images:', error);
        }
      };

      importImages();
    }
  }, [category]);

  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${productName} shown on your website. Can you share more details?`
    );
    window.open(`https://wa.me/+917977011525?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-full max-w-6xl rounded-lg bg-white shadow-xl">
          <div className="max-h-[90vh] flex flex-col">
            <div className="p-6 border-b">
              <Dialog.Title className="text-2xl font-bold">{category?.name}</Dialog.Title>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="aspect-w-1 aspect-h-1">
                        <img
                          src={image.path}
                          alt={`${category?.name} ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          {`Premium ${category?.name} made with high-quality materials`}
                        </p>
                        <button
                          onClick={() => handleWhatsAppClick(category?.name, image.path)}
                          className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                        >
                          <WhatsappIcon size={24} round />
                          <span>Contact on WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-lg text-gray-600">Products are coming soon. Please check back later!</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t">
              <button
                onClick={onClose}
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our wide range of high-quality products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        <ProductModal
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory}
        />
      </div>
    </section>
  );
};

export default Categories;
