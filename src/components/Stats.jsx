const Stats = () => {
  const stats = [
    { number: 50, label: "Hospital Beds" },
    { number: 100, label: "Our Employees" },
    { number: 40, label: "Services" },
    { number: 20, label: "Years Experience" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}+
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;