const Insurance = () => {
  const insurers = ["Star Health", "HDFC", "ICICI", "Bajaj", "Reliance"];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insurance Partners</h2>
          <p className="text-xl text-gray-600">We accept all major health insurance providers</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {insurers.map((insurer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-lg font-medium text-gray-700">{insurer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;