import Hero from '../components/Hero';
import Stats from '../components/Stats';
import WhyChoose from '../components/WhyChoose';
import Consultants from '../components/Consultants';
import Testimonials from '../components/Testimonials';
import Departments from '../components/Departments';
import DoctorAvailability from '../components/DoctorAvailability';
import Gallery from '../components/Gallery';
import Insurance from '../components/Insurance';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <WhyChoose />
      <Consultants />
      <Testimonials />
      <Departments />
      <DoctorAvailability />
      <Gallery />
      <Insurance />
      <FAQ />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default Home;