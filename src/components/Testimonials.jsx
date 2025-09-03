import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "R. Manikandan",
      content: "Excellent service and care from the doctors and staff. Very professional and compassionate.",
      id: 1,
    },
    {
      name: "S. Reena",
      content: "The facilities are modern and clean. The doctors took time to explain everything clearly.",
      id: 2,
    },
    {
      name: "A. Karthik",
      content: "I am extremely grateful for the care I received. The nurses were attentive, and the hospital environment was very welcoming.",
      id: 3,
    },
    {
      name: "P. Lakshmi",
      content: "Highly recommend Wellcare Hospital. The online appointment system is very efficient, and the service is top-notch.",
      id: 4,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600">Building trust through patient satisfaction</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />
              <p className="text-lg text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="font-semibold text-gray-900">- {testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;