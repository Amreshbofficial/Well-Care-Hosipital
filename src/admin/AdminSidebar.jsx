import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUserMd, FaCalendarAlt, FaUserInjured, FaBuilding } from 'react-icons/fa';

const AdminSidebar = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: <FaTachometerAlt /> },
        { name: 'Doctors', path: '/admin/doctors', icon: <FaUserMd /> },
        { name: 'Appointments', path: '/admin/appointments', icon: <FaCalendarAlt /> },
        { name: 'Patients', path: '/admin/patients', icon: <FaUserInjured /> },
        { name: 'Departments', path: '/admin/departments', icon: <FaBuilding /> },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
            <div className="p-6 text-2xl font-bold">Wellcare Admin</div>
            <nav className="flex-1 px-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center py-3 px-4 my-2 rounded-lg transition-colors ${
                            location.pathname === item.path
                                ? 'bg-primary-600'
                                : 'hover:bg-gray-700'
                        }`}
                    >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default AdminSidebar;