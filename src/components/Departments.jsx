import { Link } from 'react-router-dom';

const Departments = () => {
  const departments = [
    "Cardiology", "Orthopedics", "Neurology", "Gynecology", 
    "Pediatrics", "Dermatology", "ENT", "Urology"
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
            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary-50 transition-colors">
              <div className="text-lg font-medium text-gray-900">{dept}</div>
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