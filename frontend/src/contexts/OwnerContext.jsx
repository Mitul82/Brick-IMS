import React from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from './authContext.jsx';

export const OwnerContext = React.createContext(null);

export const OwnerProvider = ({ children }) => {
    const { axios, user } = React.useContext(AuthContext);

    const [shipments, setShipments] = React.useState([]);
    const [requests, setRequests] = React.useState([]);

    const getShipments = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/owner/shipments');

            if(data.success) {
                setShipments(data.resShipments);

                toast.success(data.message);

                return true;
            }

            return false;
        } catch (err) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'Something wnet wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const getRequests = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/owner/requests');

            if(data.success) {
                setRequests(data.resRequests);

                toast.success(data.message);

                return true;
            }

            return false;
        } catch (error) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'Something wnet wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const updateRequest = React.useCallback(async (updateInfo) => {
        try {
            const { data } = await axios.put('/api/owner/requests', updateInfo);

            if(data.success) {
                setRequests(data.resRequests);

                toast.success(data.message);

                return true;
            }

            return false;
        } catch (err) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'Something wnet wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const value = {
        shipments, requests,
        getShipments, getRequests,
        updateRequest
    }
    
    return (
        <OwnerContext.Provider value={ value }>
            { children }
        </OwnerContext.Provider>
    );
}