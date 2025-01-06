const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about our commitment to quality
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <p className="text-gray-600 mb-4">
              Welcome to our store! We are passionate about providing high-quality products
              that enhance your lifestyle. Our commitment to excellence and customer
              satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600 mb-4">
              With years of experience and a deep understanding of our customers' needs,
              we carefully select each product in our collection to ensure it meets our
              high standards of quality and style.
            </p>
            <p className="text-gray-600">
              Our mission is to make premium products accessible to everyone while
              providing exceptional customer service and support throughout your shopping
              experience.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <video
                src="/images/display-web/samsul-work.mp4"
                className="w-full object-cover"
                controls
                autoPlay
                muted
                loop
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <p className="text-gray-600">Products Sold</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <p className="text-gray-600">Product Categories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
