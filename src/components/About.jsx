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
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Hospital Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;