import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Create an API service file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';


const Consultants = () => {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/doctors`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConsultants(data);
      } catch (e) {
        setError(e.message);
        console.error('Error fetching consultants:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchConsultants();
  }, []);

  if (loading) return <div>Loading Consultants...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;


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
              <div className="h-56 w-56 rounded-full overflow-hidden mx-auto mt-6 border-4 border-primary-100 flex items-center justify-center">
                <img
                  src={`http://localhost:5000${doctor.image}`}
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