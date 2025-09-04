import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';
import { loginUser } from '../services/api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(formData);
            localStorage.setItem('token', data.token);
            if (data.token) {
                login();
                navigate('/');
            } else {
                throw new Error('No token received');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'Failed to login. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50 p-6">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transition-all duration-300 transform hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>
                {error && (
                    <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaUser className="text-gray-400" />
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="w-full pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 outline-none transition-colors"
                        />
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaLock className="text-gray-400" />
                        </span>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                            className="w-full pl-10 pr-3 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 outline-none transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary flex items-center justify-center space-x-2 transition-transform transform hover:scale-105"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                        <FaSignInAlt />
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-primary-600 font-semibold hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;