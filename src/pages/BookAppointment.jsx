import { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        doctorName: '',
        date: '',
        time: ''
    });
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Fetch doctors to populate the dropdown
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/doctors');
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to book appointment');
            }
            
            setMessage('Appointment booked successfully!');
            setFormData({ patientName: '', doctorName: '', date: '', time: '' });
        } catch (err) {
            setMessage(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section-padding bg-gray-50">
            <div className="container-custom max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">Book an Appointment</h1>
                    {message && <div className={`p-3 mb-4 text-sm rounded-lg ${message.includes('success') ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>{message}</div>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="patientName" className="block text-lg font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="patientName"
                                id="patientName"
                                value={formData.patientName}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="doctorName" className="block text-lg font-medium text-gray-700">Select Doctor</label>
                            <select
                                name="doctorName"
                                id="doctorName"
                                value={formData.doctorName}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="">-- Choose a Doctor --</option>
                                {doctors.map(doc => (
                                    <option key={doc._id} value={doc.name}>{doc.name} - {doc.specialty}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-lg font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-lg font-medium text-gray-700">Time</label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 p-3 border rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary flex items-center justify-center space-x-2"
                        >
                            {loading ? 'Booking...' : 'Book Appointment'}
                            <FaCalendarAlt />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;