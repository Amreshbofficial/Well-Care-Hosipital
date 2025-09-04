import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../AuthContext';
import { parseJSONSafe } from '../utils/api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const response = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email, password: formData.password }),
    });

    // Use safe parser instead of response.json() directly
    const data = await parseJSONSafe(response);

    if (!response.ok) {
      // server returned a JSON error object (or we parsed something)
      throw new Error(data.message || 'Login failed');
    }

    // success: handle token / redirect / save user
    localStorage.setItem('token', data.token);
    // ...other success logic
  } catch (err) {
    console.error(err);
    setError(err.message || 'An unexpected error occurred');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transition-all duration-300 transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Admin Login</h2>
        {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}
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
      </div>
    </div>
  );
};

export default Login;