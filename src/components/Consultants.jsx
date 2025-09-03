import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import doctor images
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
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leading Consultants</h2>
          <p className="text-xl text-gray-600">Experienced medical professionals dedicated to your health</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {consultants.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image div updated for circular display */}
              <div className="h-48 w-48 rounded-full overflow-hidden mx-auto mt-8 border-14 border-primary-100 flex items-center justify-center">
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

        <div className="text-center">
          <Link to="/consultants" className="btn-primary">
            View All Consultants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Consultants;