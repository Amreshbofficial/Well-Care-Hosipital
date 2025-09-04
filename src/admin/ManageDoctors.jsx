import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from 'react-icons/fa';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [formData, setFormData] = useState({ name: '', specialty: '', timing: '', profile: '' });
  const [file, setFile] = useState(null);

  const token = localStorage.getItem('token');

  const fetchDoctors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/doctors');
      if (!response.ok) throw new Error('Failed to fetch doctors');
      const data = await response.json();
      setDoctors(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const method = currentDoctor ? 'PUT' : 'POST';
    const url = currentDoctor 
      ? `http://localhost:5000/api/doctors/${currentDoctor._id}` 
      : 'http://localhost:5000/api/doctors';
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('specialty', formData.specialty);
    data.append('timing', formData.timing);
    data.append('profile', formData.profile || '');
    if (file) {
      data.append('image', file);
    }
    
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'x-auth-token': token,
          // DO NOT set 'Content-Type': 'multipart/form-data'. The browser does it automatically for FormData.
        },
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to ${method === 'POST' ? 'add' : 'update'} doctor`);
      }

      await fetchDoctors();
      setIsModalOpen(false);
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
        await fetchDoctors();
      } catch (e) {
        setError(e.message);
      }
    }
  };

  const openModal = (doctor = null) => {
    setCurrentDoctor(doctor);
    setFormData(doctor ? { ...doctor } : { name: '', specialty: '', timing: '', profile: '' });
    setFile(null);
    setError('');
    setIsModalOpen(true);
  };

  if (loading) return <div className="text-center p-6">Loading doctors...</div>;
  
  return (
    <div>
        {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Doctors</h1>
          <button onClick={() => openModal()} className="btn-primary flex items-center space-x-2">
            <FaPlus />
            <span>Add New Doctor</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto">
              {/* ... table headers ... */}
              <tbody>
                {doctors.map((doctor, index) => (
                  <tr key={doctor._id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-medium flex items-center">
                      <img 
                        src={`http://localhost:5000${doctor.image}`} 
                        alt={doctor.name} 
                        className="h-12 w-12 rounded-full object-cover mr-4" 
                      />
                      {doctor.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{doctor.specialty}</td>
                    <td className="px-6 py-4 font-bold">{doctor.timing}</td>
                    <td className="px-6 py-4 text-center space-x-4">
                      <button onClick={() => openModal(doctor)} className="text-blue-500 hover:text-blue-700"><FaEdit size={18} /></button>
                      <button onClick={() => handleDelete(doctor._id)} className="text-red-500 hover:text-red-700"><FaTrash size={18} /></button>
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
                <button onClick={() => setIsModalOpen(false)}><FaTimes size={24} /></button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 border rounded" />
                <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" required className="w-full p-3 border rounded" />
                <input name="timing" value={formData.timing} onChange={handleChange} placeholder="OPD Timing" required className="w-full p-3 border rounded" />
                <textarea name="profile" value={formData.profile} onChange={handleChange} placeholder="Doctor Profile" className="w-full p-3 border rounded"></textarea>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Doctor Image</label>
                  <input type="file" name="image" onChange={handleFileChange} className="w-full p-3 border rounded" />
                </div>
                <div className="flex justify-end space-x-4">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Cancel</button>
                  <button type="submit" className="btn-primary flex items-center space-x-2"><FaSave /><span>Save</span></button>
                </div>
              </form>
            </div>
          </div>
        )}
    </div>
  );
};

export default ManageDoctors;