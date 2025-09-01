import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Consultants from './pages/Consultants';
import Services from './pages/Services';
import HospitalDetails from './pages/HospitalDetails';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hospital-details" element={<HospitalDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;