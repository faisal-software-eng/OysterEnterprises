import React from 'react';

const BrandPartners = () => {
  const brands = [
    {
      name: 'Reliance Trends',
      color: '#1e40af', // blue-800
    },
    {
      name: 'Pantaloons',
      color: '#0e7490', // cyan-700
    },
    {
      name: 'D-Mart',
      color: '#0f766e', // teal-700
    },
    {
      name: 'FirstCry',
      color: '#0369a1', // sky-700
    },
    {
      name: 'V-Mart',
      color: '#4338ca', // indigo-700
    },
    {
      name: 'Play Day',
      color: '#15803d', // green-700
    },
    {
      name: 'KG Friends',
      color: '#b91c1c', // red-700
    },
  ];

  return (
    <section id="brands" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Proud to partner with some of the biggest names in retail
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[200px] group"
            >
              <div className="aspect-w-3 aspect-h-2 flex items-center justify-center">
                <div
                  className="text-lg font-bold text-center group-hover:scale-105 transition-transform duration-300"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
