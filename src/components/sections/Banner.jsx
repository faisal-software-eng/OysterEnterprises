const Banner = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')",
          opacity: 0.5,
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover Our Latest Collection
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Experience quality and style in every product
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
