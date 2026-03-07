import User from '../models/userModel.js';
import Requests from '../models/requestsModels.js';
import Production from '../models/productionModel.js';
import Shipments from '../models/shipmentsModel.js';
import Received from '../models/receivedModel.js';
import Issued from '../models/issuedModel.js';

const getShipments = async (req, res) => {
    try {
        const resShipments = await Shipments.find();

        res.status(200).json({ success: true, message: 'Retreived all shipments', resShipments });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const getReceived = async (req, res) => {
    try {
        const resReceived = await Received.find();

        return res.status(200).json({ success: true, message: 'Retreived all recevied stock entries', resReceived })
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const getIssued = async (req, res) => {
    try {
        const resIssued = await Issued.find();

        return res.status(200).json({ success: true, message: 'Retreived all stock sold entries', resIssued })
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const addReceived = async (req, res) => {
    try {
        const { supplier, material, vehicleNo, quantity } = req.body;

        if(!supplier || !material || !vehicleNo || !quantity) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const receivedOn = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const newReceived = await Received.create({ supplier, material, vehicleNo, quantity, receivedOn });

        const resReceived = await Received.find();

        return res.status(200).json({ success: true, message: 'Logged newly received stock', newReceived, resReceived });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const addIssued = async (req, res) => {
    try {
        const { targetBatchId, type, customer, quantity, remarks } = req.body;

        if(!targetBatchId || !type || !customer || !quantity) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const prod = await Production.findOne({ batchId: targetBatchId });

        if(!prod) {
            return res.status(400).json({ success: false, message: 'No production batch exists with this Batch ID' });
        }

        if(prod.type != type) {
            return res.status(400).json({ success: false, message: 'This batch is not of the requested type' });
        }

        if(prod.availableQuantity === 0) {
            return res.status(400).json({ success: false, message: 'This batch is already sold out' });
        }

        const newQuantity = prod.availableQuantity - quantity;

        if(newQuantity < 0) {
            return res.status(400).json({ success: false, message: 'Not enough brick in this batch' });
        }

        await Production.findOneAndUpdate({ targetBatchId }, { availableQuantity: newQuantity }, { new: true });

        const soldOn = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const newIssued = await Issued.create({ targetBatchId, type, customer, quantity, remarks, soldOn });

        const resIssued = await Issued.find();

        return res.status(200).json({ success: true, message: 'Logged new sale succefully', newIssued, resIssued });d
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const addRequest = async (req, res) => {
    try {
        const { material, quantity } = req.body;

         if(!material || !quantity) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const newReq = await Requests.create({ material, quantity, date });

        const resReq = await Requests.find();

        res.status(200).json({ success: true, message: 'Raised new request', newReq, resReq });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

export { getShipments, getReceived, getIssued, addReceived, addIssued, addRequest }