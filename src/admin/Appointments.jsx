import { useState, useEffect } from 'react';
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/appointments', {
                headers: { 'x-auth-token': token }
            });
            if (!response.ok) throw new Error('Failed to fetch appointments');
            const data = await response.json();
            setAppointments(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchAppointments();
        }
    }, [token]);

    const handleUpdateStatus = async (id, status) => {
        try {
            const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ status })
            });
            if (!response.ok) throw new Error('Failed to update status');
            fetchAppointments(); // Refresh the list
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this appointment?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
                    method: 'DELETE',
                    headers: { 'x-auth-token': token }
                });
                if (!response.ok) throw new Error('Failed to delete appointment');
                fetchAppointments(); // Refresh the list
            } catch (err) {
                setError(err.message);
            }
        }
    };

    if (loading) return <div>Loading appointments...</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Manage Appointments</h1>
            {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-primary-600 text-white">
                            <tr>
                                <th className="px-6 py-3">Patient</th>
                                <th className="px-6 py-3">Doctor</th>
                                <th className="px-6 py-3">Date & Time</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appt, index) => (
                                <tr key={appt._id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                    <td className="px-6 py-4">{appt.patientName}</td>
                                    <td className="px-6 py-4">{appt.doctorName}</td>
                                    <td className="px-6 py-4">{new Date(appt.date).toLocaleDateString()} at {appt.time}</td>
                                    <td className="px-6 py-4">
                                         <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            appt.status === 'Scheduled' ? 'bg-blue-200 text-blue-800' :
                                            appt.status === 'Completed' ? 'bg-green-200 text-green-800' :
                                            'bg-red-200 text-red-800'
                                        }`}>
                                            {appt.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button onClick={() => handleUpdateStatus(appt._id, 'Completed')} className="text-green-500 hover:text-green-700 p-2 rounded-full hover:bg-green-100"><FaCheck /></button>
                                        <button onClick={() => handleUpdateStatus(appt._id, 'Cancelled')} className="text-yellow-500 hover:text-yellow-700 p-2 rounded-full hover:bg-yellow-100"><FaTimes /></button>
                                        <button onClick={() => handleDelete(appt._id)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100"><FaTrash /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Appointments;