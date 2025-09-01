const Newsletter = () => {
  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Health Newsletter</h2>
          <p className="text-xl opacity-90">Get health tips and updates directly to your inbox</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Heart Health Tips</h3>
            <p className="opacity-90">Learn how to maintain a healthy heart</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Diabetes Management</h3>
            <p className="opacity-90">Tips for managing diabetes effectively</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Annual Checkup</h3>
            <p className="opacity-90">Importance of regular health checkups</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;