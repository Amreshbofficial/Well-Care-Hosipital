const Testimonials = () => {
  const testimonials = [
    {
      name: "R. Manikandan",
      content: "Excellent service and care from the doctors and staff. Very professional and compassionate."
    },
    {
      name: "S. Reena",
      content: "The facilities are modern and clean. The doctors took time to explain everything clearly."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600">What our patients say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-primary-600 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="font-semibold text-gray-900">- {testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;