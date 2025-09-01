import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Expert Care. Trusted Hands.
          </h1>
          <p className="text-xl mb-8 opacity-90">
            We provide compassionate, advanced medical care 24/7. Our team of experienced 
            healthcare professionals is dedicated to your well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/book-appointment" className="btn-primary text-center">
              Book Appointment
            </Link>
            <Link to="/departments" className="btn-secondary text-center">
              Our Departments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;