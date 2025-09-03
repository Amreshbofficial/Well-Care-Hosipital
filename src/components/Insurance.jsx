import starHealthLogo from '../assets/images/star-health-logo.webp';
import hdfcLogo from '../assets/images/hdfc-logo.webp';
import iciciLogo from '../assets/images/icici-logo.webp';
import bajajLogo from '../assets/images/bajaj-logo.webp';
import relianceLogo from '../assets/images/reliance-logo.webp';

const Insurance = () => {
  const insurers = [
    { name: "Star Health", logo: starHealthLogo },
    { name: "HDFC", logo: hdfcLogo },
    { name: "ICICI", logo: iciciLogo },
    { name: "Bajaj", logo: bajajLogo },
    { name: "Reliance", logo: relianceLogo },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insurance Partners</h2>
          <p className="text-xl text-gray-600">We accept all major health insurance providers</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {insurers.map((insurer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex items-center justify-center text-center">
              <img
                src={insurer.logo}
                alt={`${insurer.name} Logo`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;