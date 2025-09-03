import { useState, useEffect } from 'react';

const AnimatedCount = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * target));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      setCount(target);
    };
  }, [target]);

  return <div>{count}+</div>;
};

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
                <AnimatedCount target={stat.number} />
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