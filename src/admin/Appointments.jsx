import { useState, useEffect } from 'react';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/appointments', {
                    headers: { 'x-auth-token': token }
                });
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAppointments();
    }, [token]);

    if (loading) {
        return <div>Loading appointments...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Manage Appointments</h1>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-primary-600 text-white">
                            <tr>
                                <th className="px-6 py-4 text-lg font-semibold">Patient Name</th>
                                <th className="px-6 py-4 text-lg font-semibold">Doctor</th>
                                <th className="px-6 py-4 text-lg font-semibold">Date</th>
                                <th className="px-6 py-4 text-lg font-semibold">Time</th>
                                <th className="px-6 py-4 text-lg font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appt, index) => (
                                <tr key={appt._id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                    <td className="px-6 py-4">{appt.patientName}</td>
                                    <td className="px-6 py-4">{appt.doctorName}</td>
                                    <td className="px-6 py-4">{new Date(appt.date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">{appt.time}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            appt.status === 'Scheduled' ? 'bg-blue-200 text-blue-800' :
                                            appt.status === 'Completed' ? 'bg-green-200 text-green-800' :
                                            'bg-red-200 text-red-800'
                                        }`}>
                                            {appt.status}
                                        </span>
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