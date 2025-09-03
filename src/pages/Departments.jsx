import { FaHeartbeat, FaBone, FaBrain, FaBaby, FaStethoscope, FaCut, FaEye, FaLungs, FaMedkit, FaTeeth } from 'react-icons/fa';

const departmentsList = [
  {
    name: "Cardiology",
    description: "Our cardiology department specializes in the diagnosis and treatment of heart diseases, offering advanced care for patients with cardiovascular conditions.",
    icon: <FaHeartbeat />,
  },
  {
    name: "Orthopedics",
    description: "We provide comprehensive orthopedic care for musculoskeletal issues, from sports injuries to joint replacements and spinal surgeries.",
    icon: <FaBone />,
  },
  {
    name: "Neurology",
    description: "Our neurology team focuses on disorders of the nervous system, including stroke, epilepsy, and degenerative diseases like Parkinson's and Alzheimer's.",
    icon: <FaBrain />,
  },
  {
    name: "Gynecology",
    description: "We offer complete healthcare services for women, including prenatal care, childbirth, and treatment for reproductive health issues.",
    icon: <FaBaby />,
  },
  {
    name: "Pediatrics",
    description: "Our pediatric department is dedicated to providing compassionate and specialized medical care for infants, children, and adolescents.",
    icon: <FaStethoscope />,
  },
  {
    name: "Dermatology",
    description: "Our dermatologists diagnose and treat various skin, hair, and nail conditions, offering both medical and cosmetic solutions.",
    icon: <FaCut />,
  },
  {
    name: "ENT (Ear, Nose, & Throat)",
    description: "We treat conditions related to the ear, nose, throat, head, and neck, from minor infections to complex surgeries.",
    icon: <FaEye />,
  },
  {
    name: "Urology",
    description: "Our urology department handles the diagnosis and treatment of diseases of the urinary tract in both men and women, and the male reproductive system.",
    icon: <FaLungs />,
  },
  {
    name: "General Medicine",
    description: "Providing a wide range of non-surgical health services, our general medicine department is the first point of contact for many patients.",
    icon: <FaMedkit />,
  },
  {
    name: "Dentistry",
    description: "Our dental clinic offers comprehensive oral care, including routine check-ups, cleanings, and advanced restorative procedures.",
    icon: <FaTeeth />,
  },
];

const Departments = () => {
  return (
    <div className="bg-gray-50">
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Medical Departments</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our specialized medical departments, each staffed by expert professionals
            and equipped with advanced technology to provide the best care.
          </p>
        </div>
      </div>

      <div className="container-custom pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentsList.map((dept, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-primary-600 text-5xl mb-4">
                {dept.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{dept.name}</h2>
              <p className="text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;