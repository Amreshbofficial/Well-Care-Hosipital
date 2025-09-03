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
import MapSection from '../components/MapSection'; // Import the new component
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
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
      <MapSection /> {/* Add the new component here */}
      <CTA />
    </div>
  );
};

export default Home;