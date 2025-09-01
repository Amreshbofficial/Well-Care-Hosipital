import { Link } from 'react-router-dom';
import { FaStethoscope, FaHeartbeat, FaUserMd, FaShieldAlt } from 'react-icons/fa';
import doctorIllustration from '../assets/doctor-illustration.svg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="flex items-center mb-6">
              <FaUserMd className="text-3xl mr-3 text-primary-200" />
              <span className="text-primary-200 font-medium text-lg">Professional Medical Care</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Care.{' '}
              <span className="text-secondary-100">Trusted Hands.</span>
            </h1>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              We provide compassionate, advanced medical care 24/7. Our team of experienced 
              healthcare professionals is dedicated to your well-being and recovery.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <FaStethoscope className="text-secondary-200 mr-2" />
                <span className="text-sm">Expert Diagnosis</span>
              </div>
              <div className="flex items-center">
                <FaHeartbeat className="text-accent-200 mr-2" />
                <span className="text-sm">24/7 Emergency</span>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="text-primary-200 mr-2" />
                <span className="text-sm">Safe & Secure</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-appointment" className="btn-primary text-center text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Book Appointment
              </Link>
              <Link to="/departments" className="btn-secondary text-center text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Our Departments
              </Link>
            </div>
          </div>
          
          {/* Right Content - Doctor Image */}
          <div className="relative lg:block">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Doctor illustration */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src={doctorIllustration} 
                  alt="Professional Doctor with Stethoscope" 
                  className="w-full h-auto max-w-md mx-auto filter drop-shadow-lg"
                />
              </div>
              
              {/* Floating medical elements */}
              <div className="absolute -top-4 left-8 bg-secondary-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <FaStethoscope className="text-xl" />
              </div>
              <div className="absolute -bottom-4 right-8 bg-accent-500 text-white p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <FaHeartbeat className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;