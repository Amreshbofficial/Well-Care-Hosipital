import { useState, useEffect } from 'react';
import { FaUserMd } from 'react-icons/fa';

const DoctorAvailability = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/doctors');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDoctors(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return <div className="section-padding text-center">Loading...</div>;
  if (error) return <div className="section-padding text-center text-red-500">Error: {error}</div>;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Doctor Availability</h2>
          <p className="text-xl text-gray-600">Current schedule of our medical consultants</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="bg-primary-600 text-white">
                <tr className="border-b border-primary-700">
                  <th className="px-6 py-4 text-lg font-semibold">Name</th>
                  <th className="px-6 py-4 text-lg font-semibold">Specialty</th>
                  <th className="px-6 py-4 text-lg font-semibold">OPD Timing</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-primary-50`}
                  >
                    <td className="px-6 py-4 font-medium flex items-center">
                      <FaUserMd className="text-primary-600 mr-3" />
                      {doctor.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{doctor.specialty}</td>
                    <td className="px-6 py-4 text-lg text-primary-800 font-bold">{doctor.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAvailability;