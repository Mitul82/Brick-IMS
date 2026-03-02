import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [token, setToken] = React.useState(localStorage.getItem('token'));

    React.useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserDetails = localStorage.getItem('userDetails');

        if(storedToken && storedUserDetails) {
            try {
                const userData = JSON.parse(storedUserDetails);

                setUser(userData);
                setToken(storedToken);

                axios.defaults.headers.common['token'] = storedToken;
            } catch (err) {
                console.error('Failed to parse stored user details: ', err);
                localStorage.removeItem('userDetails');
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = async (userData) => {
        try {
            const { data } = await axios.post('/api/auth/login', userData);

            if(data.success) {
                setUser(data.userData);

                localStorage.setItem('userDetails', JSON.stringify(data.userData));

                setToken(data.token);

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
    }

    const signup = async (userData) => {
        try {
            const { data } = await axios.post('/api/auth/login', userData);

            if(data.success) {
                setUser(data.userData);

                localStorage.setItem('userDetails', JSON.stringify(data.userData));

                setToken(data.token);

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
    }

    const logout = async () => {
        try {
            setUser(null);

            setToken(null);

            localStorage.removeItem('token');

            localStorage.removeItem('userDetails');

            axios.defaults.headers.common['token'] = null;

            toast.success('Logged out successfully');
        } catch (err) {
            console.log(err);
            
            toast.error('Error in logging out');
        }
    }

    const value = {
        axios,
        token, user,
        setToken, setUser,
        login, signup, logout
    }

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
}