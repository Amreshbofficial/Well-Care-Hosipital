import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBone, FaBrain, FaBaby, FaStethoscope, FaLungs, FaCut, FaEye } from 'react-icons/fa';

const Departments = () => {
  const departments = [
    { name: "Cardiology", icon: <FaHeartbeat /> },
    { name: "Orthopedics", icon: <FaBone /> },
    { name: "Neurology", icon: <FaBrain /> },
    { name: "Gynecology", icon: <FaBaby /> },
    { name: "Pediatrics", icon: <FaStethoscope /> },
    { name: "Dermatology", icon: <FaCut /> },
    { name: "ENT", icon: <FaEye /> },
    { name: "Urology", icon: <FaLungs /> }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Medical Departments</h2>
          <p className="text-xl text-gray-600">Comprehensive healthcare services across all specialties</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {departments.map((dept, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-3 transition-transform duration-300 hover:scale-105 hover:bg-primary-50">
              <div className="text-primary-600 text-3xl mb-2">
                {dept.icon}
              </div>
              <div className="text-lg font-medium text-gray-900">{dept.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/departments" className="btn-primary">
            Explore All Departments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Departments;