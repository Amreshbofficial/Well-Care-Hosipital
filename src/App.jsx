import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
import AdminProtectedRoute from './components/AdminProtectedRoute'; // Import the new component

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
      <Routes>
        {/* User-facing routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="departments" element={<Departments />} />
          <Route path="consultants" element={<Consultants />} />
          <Route path="services" element={<Services />} />
          <Route path="hospital-details" element={<HospitalDetails />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<UserLogin />} />
          <Route path="register" element={<UserRegister />} />
          <Route
            path="book-appointment"
            element={
              <ProtectedRoute>
                <BookAppointment />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
            path="/admin"
            element={
                <AdminProtectedRoute>
                    <AdminLayout>
                        <AdminDashboard />
                    </AdminLayout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/doctors"
            element={
                <AdminProtectedRoute>
                    <AdminLayout>
                        <ManageDoctors />
                    </AdminLayout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/appointments"
            element={
                <AdminProtectedRoute>
                    <AdminLayout>
                        <Appointments />
                    </AdminLayout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/patients"
            element={
                <AdminProtectedRoute>
                    <AdminLayout>
                        <Patients />
                    </AdminLayout>
                </AdminProtectedRoute>
            }
        />
        <Route
            path="/admin/departments"
            element={
                <AdminProtectedRoute>
                    <AdminLayout>
                        <ManageDepartments />
                    </AdminLayout>
                </AdminProtectedRoute>
            }
        />
      </Routes>
    </Router>
  );
}

// Layout for user-facing pages
const UserLayout = () => (
  <div className="App min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;