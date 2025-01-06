import { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent products and amazing customer service! Will definitely buy again.',
      image: '/images/display-web/cus-1.jpeg',
      date: '2024-12-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      comment: 'The quality exceeded my expectations. Highly recommended!',
      image: '/images/display-web/cus-2.jpeg',
      date: '2024-12-10',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      rating: 4,
      comment: 'Great products at competitive prices. Very satisfied with my purchase.',
      image: '/images/display-web/cus-03.jpeg',
      date: '2024-12-05',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <div className="max-w-2xl mx-auto">
                    <div className="text-center">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <div className="flex justify-center mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-600 italic mb-4">"{review.comment}"</p>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
