import { useState, useEffect, useContext } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [formData, setFormData] = useState({ name: '', specialty: '', timing: '' });
  const [file, setFile] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/doctors');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDoctors(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'imageFile') {
      setFile(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = currentDoctor ? 'PUT' : 'POST';
    const url = currentDoctor ? `http://localhost:5000/api/doctors/${currentDoctor._id}` : 'http://localhost:5000/api/doctors';
    
    const form = new FormData();
    form.append('name', formData.name);
    form.append('specialty', formData.specialty);
    form.append('timing', formData.timing);
    if (file) {
      form.append('image', file);
    }
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'x-auth-token': token,
        },
        body: form,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to ${method === 'POST' ? 'add' : 'update'} doctor`);
      }

      fetchDoctors();
      setIsModalOpen(false);
      setFile(null);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/doctors/${id}`, {
          method: 'DELETE',
          headers: { 'x-auth-token': token }
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete doctor');
        }
        fetchDoctors();
      } catch (e) {
        setError(e.message);
      }
    }
  };

  const openModal = (doctor = null) => {
    setCurrentDoctor(doctor);
    setFormData(doctor ? doctor : { name: '', specialty: '', timing: '' });
    setIsModalOpen(true);
    setFile(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isLoggedIn) {
    return <div className="section-padding text-center text-red-500">You must be logged in to view this page.</div>;
  }

  if (loading) return <div className="section-padding text-center">Loading...</div>;
  if (error) return <div className="section-padding text-center text-red-500">Error: {error}</div>;

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Admin Dashboard</h1>
          <button onClick={handleLogout} className="btn-secondary flex items-center space-x-2">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
        
        <div className="flex justify-end mb-6">
          <button onClick={() => openModal()} className="btn-primary flex items-center space-x-2">
            <FaPlus />
            <span>Add New Doctor</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead className="bg-primary-600 text-white">
                <tr className="border-b border-primary-700">
                  <th className="px-6 py-4 text-lg font-semibold">Name</th>
                  <th className="px-6 py-4 text-lg font-semibold">Specialty</th>
                  <th className="px-6 py-4 text-lg font-semibold">OPD Timing</th>
                  <th className="px-6 py-4 text-lg font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor._id} className={`border-b border-gray-200 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-medium flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img src={`http://localhost:5000${doctor.image}`} alt={doctor.name} className="h-full w-full object-cover object-top" />
                      </div>
                      {doctor.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{doctor.specialty}</td>
                    <td className="px-6 py-4 text-lg text-primary-800 font-bold">{doctor.timing}</td>
                    <td className="px-6 py-4 text-center space-x-4">
                      <button onClick={() => openModal(doctor)} className="text-blue-500 hover:text-blue-700 transition-colors"><FaEdit /></button>
                      <button onClick={() => handleDelete(doctor._id)} className="text-red-500 hover:text-red-700 transition-colors"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{currentDoctor ? 'Edit Doctor' : 'Add New Doctor'}</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-800"><FaTimes size={24} /></button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 border rounded" />
                <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required className="w-full p-3 border rounded" />
                <input type="file" name="imageFile" onChange={handleChange} className="w-full p-3 border rounded" />
                <input name="timing" value={formData.timing} onChange={handleChange} placeholder="OPD Timing" required className="w-full p-3 border rounded" />
                <div className="flex justify-end space-x-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Cancel</button>
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <FaSave />
                    <span>Save</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;