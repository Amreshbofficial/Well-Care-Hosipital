const DoctorAvailability = () => {
  const doctors = [
    { name: "Dr. Kumaresapathy", specialty: "Orthopedic", timing: "On Call" },
    { name: "Dr. Geethan", specialty: "Orthopedic", timing: "On Call" },
    { name: "Dr. Priya Elangovan", specialty: "Gynecologist", timing: "On Call" },
    { name: "Dr. Naveen Iqbal", specialty: "Neurologist", timing: "On Call" },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Doctor Availability</h2>
          <p className="text-xl text-gray-600">Current schedule of our medical consultants</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Specialty</th>
                  <th className="px-6 py-4 text-left">OPD Timing</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium">{doctor.name}</td>
                    <td className="px-6 py-4">{doctor.specialty}</td>
                    <td className="px-6 py-4">{doctor.timing}</td>
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