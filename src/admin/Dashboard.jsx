import { useState, useEffect } from 'react';
import { FaUserMd, FaCalendarAlt, FaUserInjured, FaBuilding } from 'react-icons/fa';

// Use the Vite environment variable for the API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Dashboard = () => {
    const [stats, setStats] = useState({ doctors: 0, appointments: 0, patients: 0, departments: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchStatsData = async () => {
            if (!token) {
                setError("No authentication token found.");
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/api/stats`, {
                    headers: { 
                        'x-auth-token': token,
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch stats');
                }
                const data = await response.json();
                setStats(data);
            } catch (err) {
                console.error('Error fetching stats:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchStatsData();
    }, [token]);

    const statCards = [
        { title: 'Total Doctors', value: stats.doctors, icon: <FaUserMd className="text-white" size={24} /> },
        { title: 'Appointments', value: stats.appointments, icon: <FaCalendarAlt className="text-white" size={24} /> },
        { title: 'Total Patients', value: stats.patients, icon: <FaUserInjured className="text-white" size={24} /> },
        { title: 'Departments', value: stats.departments, icon: <FaBuilding className="text-white" size={24} /> },
    ];

    if (loading) {
        return <div>Loading dashboard...</div>
    }

    if (error) {
        return <div className="p-4 text-red-700 bg-red-100 rounded-lg">Error: {error}</div>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((card, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <div className="bg-primary-500 p-4 rounded-full mr-4">
                           {card.icon}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-600">{card.title}</h2>
                            <p className="text-3xl font-bold text-gray-800">{card.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;