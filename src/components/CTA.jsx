import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section-padding bg-primary-700 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Health is Our Priority</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the difference of compassionate, professional healthcare at Wellcare Hospital
        </p>
        <Link to="/book-appointment" className="btn-secondary">
          Book an Appointment Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;