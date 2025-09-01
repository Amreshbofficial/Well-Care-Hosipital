const About = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Wellcare Hospital</h2>
            <p className="text-lg text-gray-700 mb-6">
              Wellcare Hospital & Research Institute is a leading healthcare provider 
              dedicated to delivering exceptional medical care with compassion and innovation.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our state-of-the-art facilities and experienced medical professionals 
              ensure that you receive the highest quality healthcare services.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center border border-primary-200">
              {/* Professional Medical Team Illustration */}
              <div className="text-center text-primary-700">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="text-5xl">👨‍⚕️</div>
                  <div className="text-5xl">👩‍⚕️</div>
                </div>
                <div className="text-2xl font-semibold mb-2">Medical Excellence</div>
                <div className="text-lg opacity-80">Professional Healthcare Team</div>
                <div className="mt-4 flex justify-center space-x-1">
                  <div className="text-2xl">🩺</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;