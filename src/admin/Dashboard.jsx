import { useState, useEffect } from 'react';
import { FaUserMd, FaCalendarAlt, FaUserInjured, FaBuilding } from 'react-icons/fa';

const Dashboard = () => {
    const [stats, setStats] = useState({ doctors: 0, appointments: 0, patients: 0, departments: 0 });
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    // Create an API service file
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const fetchStats = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/stats`, {
            headers: { 
                'x-auth-token': token,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Failed to fetch stats');
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching stats: ${error.message}`);
    }
};

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/stats', {
                    headers: { 'x-auth-token': token }
                });
                if (!response.ok) throw new Error('Failed to fetch stats');
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
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