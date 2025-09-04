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
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/Dashboard';
import ManageDoctors from './admin/ManageDoctors';
import AdminLogin from './admin/Login';
import Appointments from './admin/Appointments';
import Patients from './admin/Patients';
import ManageDepartments from './admin/Departments';


function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Routes>
          {/* User-facing routes */}
          <Route path="/*" element={<UserLayout />} />

          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

// Layout for user-facing pages
const UserLayout = () => (
  <>
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
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/book-appointment" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
      </Routes>
    </main>
    <Footer />
  </>
);

// Group admin routes
const AdminRoutes = () => (
    <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route
            path="/"
            element={
                <ProtectedRoute>
                    <AdminLayout>
                        <AdminDashboard />
                    </AdminLayout>
                </ProtectedRoute>
            }
        />
        <Route
            path="doctors"
            element={
                <ProtectedRoute>
                    <AdminLayout>
                        <ManageDoctors />
                    </AdminLayout>
                </ProtectedRoute>
            }
        />
        <Route
            path="appointments"
            element={
                <ProtectedRoute>
                    <AdminLayout>
                        <Appointments />
                    </AdminLayout>
                </ProtectedRoute>
            }
        />
        <Route
            path="patients"
            element={
                <ProtectedRoute>
                    <AdminLayout>
                        <Patients />
                    </AdminLayout>
                </ProtectedRoute>
            }
        />
        <Route
            path="departments"
            element={
                <ProtectedRoute>
                    <AdminLayout>
                        <ManageDepartments />
                    </AdminLayout>
                </ProtectedRoute>
            }
        />
    </Routes>
);


export default App;