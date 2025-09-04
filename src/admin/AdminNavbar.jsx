import { FaSignOutAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <button onClick={handleLogout} className="btn-secondary flex items-center space-x-2">
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </header>
    );
};

export default AdminNavbar;