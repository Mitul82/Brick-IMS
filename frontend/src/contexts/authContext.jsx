import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = React.createContext(null);

const savedToken = localStorage.getItem('token');
const savedUser = localStorage.getItem('userDetails');

if(savedToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
}

export const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(savedToken);
    const [user, setUser] = React.useState(() => {
        try {
            return savedUser ? JSON.parse(savedUser) : null
        } catch(err) {
            return null;
        }
    });

    const login = React.useCallback(async (userData) => {
        try {
            const { data } = await axios.post('/api/auth/login', userData);

            if(data.success) {
                setUser(data.userData);

                localStorage.setItem('userDetails', JSON.stringify(data.userData));

                setToken(data.token);

                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

                localStorage.setItem('token', data.token);

                toast.success(data.message);

                return true;
            }

            return false;
        } catch (err) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'Something went wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const signup = React.useCallback(async (userData) => {
        try {
            const { data } = await axios.post('/api/auth/signup', userData);

            if(data.success) {
                setUser(data.userData);

                localStorage.setItem('userDetails', JSON.stringify(data.userData));

                setToken(data.token);

                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

                localStorage.setItem('token', data.token);

                toast.success(data.message);

                return true;
            }
        
            return false;
        } catch (err) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'Something went wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const logout = React.useCallback(async () => {
        try {
            setUser(null);

            setToken(null);

            localStorage.removeItem('token');

            localStorage.removeItem('userDetails');

            axios.defaults.headers.common['Authorization'] = null;

            toast.success('Logged out successfully');
        } catch (err) {
            console.log(err);
            
            toast.error('Error in logging out');
        }
    });

    const value = React.useMemo(() => ({
        axios,
        token, user,
        setToken, setUser,
        login, signup, logout
    }));

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
}