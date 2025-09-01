import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <div className="hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 h-96 flex items-center justify-center border border-white/20">
              {/* Professional Doctor with Stethoscope Illustration */}
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍⚕️</div>
                <div className="text-2xl font-semibold mb-2">Professional Care</div>
                <div className="text-lg opacity-80">Expert Medical Team</div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;