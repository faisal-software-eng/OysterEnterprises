import { useState } from 'react';

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Category 1',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      products: [
        { id: 1, name: 'Product 1', price: '$99.99' },
        { id: 2, name: 'Product 2', price: '$149.99' },
        { id: 3, name: 'Product 3', price: '$199.99' },
      ],
    },
    {
      id: 2,
      name: 'Category 2',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      products: [
        { id: 4, name: 'Product 4', price: '$79.99' },
        { id: 5, name: 'Product 5', price: '$129.99' },
        { id: 6, name: 'Product 6', price: '$179.99' },
      ],
    },
    {
      id: 3,
      name: 'Category 3',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      products: [
        { id: 7, name: 'Product 7', price: '$89.99' },
        { id: 8, name: 'Product 8', price: '$139.99' },
        { id: 9, name: 'Product 9', price: '$189.99' },
      ],
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedCategory(category)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">{selectedCategory.name} Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedCategory.products.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-medium">{product.name}</h4>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategories;
