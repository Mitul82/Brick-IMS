import User from '../models/userModel.js';
import Shipments from '../models/shipmentsModel.js';
import Production from '../models/productionModel.js';
import Requests from '../models/requestsModels.js';

import generateGatePass from '../helpers/generateGatePass.js';
import uploadToCloudinary from '../helpers/uploadToCloudinary.js';

const getShipments = async (req, res) => {
    try {
        const resShipments = await Shipments.find();

        res.status(200).json({ success: true, message: 'Retrived all Shipments', resShipments });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const getProduction = async (req, res) => {
    try {
        const resProd = await Production.find();

        res.status(200).json({ success: true, message: 'Retrived all production batches', resProd });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const getRequests = async (req, res) =>  {
    try {
        const resRequest = await Requests.find();

        res.status(200).json({ success: true, message: 'Retrived all requests', resRequest });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const addShipment = async (req, res) => {
    try {
        const { orderId, customer, vehicleNo, quantity, delivery, driverName } = req.body;

        if(!orderId || !customer || !vehicleNo || !quantity || !delivery || !driverName) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const shipment = await Shipments.findOne({ orderId });

        if(shipment) {
            return res.status(400).json({ success: false, message: 'An order with this order ID already exists' });
        }

        const pdfBuffer = await generateGatePass({ orderId, customer, vehicleNo, quantity, delivery, driverName });

        const gatePassURL = await uploadToCloudinary(pdfBuffer, orderId);

        const newShipment = await Shipments.create({ orderId, customer, vehicleNo, quantity, delivery, driverName, gatePassURL, gatepassGeneratedOn: new Date() });

        const resShipment = await Shipments.find();

        res.status(200).json({ success: true, message: 'New shipment log added', newShipment, resShipment });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const addProduction = async (req, res) => {
    try {
        const { batchId, type, produced, wastage } = req.body;

        console.log(req.body);

        if(!batchId || !type || !produced || !wastage) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const prod = await Production.findOne({ batchId });

        if(prod) {
            return res.status(400).json({ success: false, message: 'A production batch with this BatchId already exists' });
        }

        const newProd = await Production.create({ batchId, type, produced, wastage });

        const resProd = await Production.find();

        res.status(200).json({ success: true, newProd, resProd, message: 'Create a new production batch' });

    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const addRequest = async (req, res) => {
    try {
        const { material, quantity, reason } = req.body;

        if(!material || !quantity) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const newReq = await Requests.create({ material, quantity, reason, date });

        const resReq = await Requests.find();

        res.status(200).json({ success: true, message: 'Raised new request', newReq, resReq });
    } catch (err) {
        console.error(err);
        
        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

export { getShipments, getProduction, getRequests, addProduction, addShipment, addRequest }