// src/components/WhyChoose.jsx
import { FaUserMd, FaClock, FaClinicMedical, FaHeart } from 'react-icons/fa';

const WhyChoose = () => {
  const features = [
    {
      icon: <FaUserMd size={40} className="text-primary-600" />,
      title: "Qualified Doctors",
      description: "Our team consists of highly qualified and experienced medical professionals."
    },
    {
      icon: <FaClock size={40} className="text-primary-600" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services to handle critical medical situations."
    },
    {
      icon: <FaClinicMedical size={40} className="text-primary-600" />,
      title: "Advanced Equipment",
      description: "State-of-the-art medical technology for accurate diagnosis and treatment."
    },
    {
      icon: <FaHeart size={40} className="text-primary-600" />,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans focused on individual patient needs."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Wellcare Hospital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing exceptional healthcare services with compassion and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;