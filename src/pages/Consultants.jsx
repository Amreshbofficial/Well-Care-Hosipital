import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import doctor images from the correct relative path
import drSameerRahman from '../assets/images/dr-sameer-rahman.webp';
import drPriyaElangovan from '../assets/images/dr-priya-elangovan.webp';
import drNaveenIqbal from '../assets/images/dr-naveen-iqbal.webp';
import drFathimaBanu from '../assets/images/dr-fathima-banu.webp';

const Consultants = () => {
  const consultants = [
    { name: "Dr. Sameer Rahman", specialty: "Cardiologist", image: drSameerRahman },
    { name: "Dr. Priya Elangovan", specialty: "Gynecologist", image: drPriyaElangovan },
    { name: "Dr. Naveen Iqbal", specialty: "Neurologist", image: drNaveenIqbal },
    { name: "Dr. Fathima Banu", specialty: "Pediatrician", image: drFathimaBanu },
    { name: "Dr. Kumaresapathy", specialty: "Orthopedic", image: drNaveenIqbal }, // Using placeholder
    { name: "Dr. Geethan", specialty: "Orthopedic", image: drPriyaElangovan }, // Using placeholder
  ];

  return (
    <div className="bg-gray-50">
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Medical Consultants</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of leading medical professionals and specialists, dedicated to providing exceptional patient care.
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultants.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-56 w-56 rounded-full overflow-hidden mx-auto mt-6 border-4 border-primary-100 flex items-center justify-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-primary-600 mb-4">{doctor.specialty}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center mx-auto">
                  View Profile <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultants;