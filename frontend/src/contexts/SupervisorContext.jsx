import React from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from './authContext.jsx';

const SupervisorContext = React.createContext(null);

export const SupervisorProvider = ({ children }) => {
    const { axios, user } = React.useContext(AuthContext);

    const value = {
        
    }
    
    return (
        <SupervisorContext.Provider value={ value }>
            { children }
        </SupervisorContext.Provider>
    );
}