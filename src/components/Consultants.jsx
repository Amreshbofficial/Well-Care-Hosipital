import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Consultants = () => {
  const consultants = [
    { name: "Dr. Sameer Rahman", specialty: "Cardiologist" },
    { name: "Dr. Priya Elangovan", specialty: "Gynecologist" },
    { name: "Dr. Naveen Iqbal", specialty: "Neurologist" },
    { name: "Dr. Fathima Banu", specialty: "Pediatrician" },
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
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-4xl text-gray-400">👨‍⚕️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-primary-600 mb-4">{doctor.specialty}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
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