import React from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from './authContext.jsx';

export const SupervisorContext = React.createContext(null);

export const SupervisorProvider = ({ children }) => {
    const { axios, user, token } = React.useContext(AuthContext);

    const [production, setProduction] =  React.useState([]);
    const [shipments, setShipments] = React.useState([]);
    const [requests, setRequests] = React.useState([]);

    const getShipments = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/supervisor/shipments');

            if(data.success) {
                setShipments(data.resShipments);

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

    const getProduction = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/supervisor/production');

            if(data.success) {
                setProduction(data.resProd);

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

    const getRequests = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/supervisor/requests');

            if(data.success) {
                setRequests(data.resRequest);

                toast.success(data.message);

                return true;
            }

            return false;
        } catch (err) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'something went wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const sendShipment = React.useCallback(async (formData) => {
        try {
            const { data } = await axios.post('/api/supervisor/shipments', formData);

            if(data.success) {
                setShipments(data.resShipments);

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

    const sendProduction = React.useCallback(async (formData) => {
        try {
            const { data } = await axios.post('/api/supervisor/production', formData);

            if(data.success) {
                setProduction(data.resProd);

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

    const sendRequest = React.useCallback(async (formData) => {
        try {
            const { data } = await axios.post('/api/supervisor/requests', formData);

            if(data.success) {
                setRequests(data.resReq);

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

    const value = React.useMemo(() => ({
        production, shipments, requests,
        getProduction, getShipments, getRequests,
        sendShipment, sendProduction, sendRequest
    }));
    
    return (
        <SupervisorContext.Provider value={ value }>
            { children }
        </SupervisorContext.Provider>
    );
}