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
import ProtectedRoute from './components/ProtectedRoute';

// Import regular user authentication pages
import UserLogin from './pages/Login';
import UserRegister from './pages/Register';

// Import admin pages
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/Login';

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
            
            {/* User routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />

            {/* Admin-only routes (protected) */}
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;