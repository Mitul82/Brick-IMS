import React from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from './authContext.jsx';

export const OwnerContext = React.createContext(null);

export const OwnerProvider = ({ children }) => {
    const { axios, user } = React.useContext(AuthContext);

    const value = {
        
    }
    
    return (
        <OwnerContext.Provider value={ value }>
            { children }
        </OwnerContext.Provider>
    );
}