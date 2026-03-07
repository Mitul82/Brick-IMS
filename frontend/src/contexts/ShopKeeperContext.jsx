import React from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from './authContext.jsx';

export const ShopKeeperContext = React.createContext(null);

export const ShopKeeperProvider = ({ children }) => {
    const [shipments, setShipments] = React.useState([]);
    const [received, setReceived] = React.useState([]);
    const [issued, setIssued] = React.useState([]);

    const { axios, user } = React.useContext(AuthContext);

    const getShipments = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/shopkeeper/shipments');

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

    const getReceived = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/shopkeeper/received');

            if(data.success) {
                setReceived(data.resReceived);

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

    const getIssued = React.useCallback(async () => {
        try {
            const { data } = await axios.get('/api/shopkeeper/issued');

            if(data.success) {
                setIssued(data.resIssued);

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

    const sendReceived = React.useCallback(async (formData) => {
        try {
            const { data } = await axios.post('/api/shopkeeper/received', formData);

            if(data.success) {
                setReceived(data.resReceived);

                toast.success(data.message);

                return true;
            }
        } catch (err) {
            console.error(err);

            const errMessage = err.response?.data?.message || 'Something wnet wrong';

            toast.error(errMessage);

            return false;
        }
    });

    const sendIssued = React.useCallback(async (formdata) => {
        try {
            const { data } = await axios.post('/api/shopkeeper/issued', formdata);

            if(data.success) {
                setReceived(data.resReceived);

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

    const sendRequest = React.useCallback(async (formData) => {
        try {
            const { data } = await axios.post('/api/shopkeeper/requests', formData);

            if(data.success) {
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
        shipments, received, issued,
        getShipments, getReceived, getIssued,
        sendReceived, sendIssued, sendRequest
    }));
    
    return (
        <ShopKeeperContext.Provider value={ value }>
            { children }
        </ShopKeeperContext.Provider>
    );
}