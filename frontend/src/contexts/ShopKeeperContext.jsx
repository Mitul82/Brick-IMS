import React from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from './authContext.jsx';

const ShopKeeperContext = React.createContext(null);

export const ShopKeeperProvider = ({ children }) => {
    const { axios, user } = React.useContext(AuthContext);

    const value = {
        
    }
    
    return (
        <ShopKeeperContext.Provider value={ value }>
            { children }
        </ShopKeeperContext.Provider>
    );
}