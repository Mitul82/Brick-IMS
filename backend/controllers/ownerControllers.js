import User from '../models/userModel.js';
import Shipments from '../models/shipmentsModel.js';
import Requests from '../models/requestsModels.js';

const getShipments = async (req, res) => {
    try {
        const resShipments = await Shipments.find();

        return res.status(200).json({ success: true, message: 'Retreived all shipments succesfully', resShipments });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, message: err.message ? err?.message : 'Internal server error' });
    }
}

const getRequests = async (req, res) => {
    try {
        const resRequests = await Requests.find().populate('requestedBy', 'name');

        const totalReq = resRequests.filter((req) => req.status === 'Pending');

        return res.status(200).json({ success: true, resRequests, message: `Total Requests: ${totalReq.length}` });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ suucess: false, messasge: err.message ? err?.message : 'Internal server error' });
    }
}

const updateRequest = async (req, res) => {
    try {
        const { status, id } = req.body;

        if(!status || !id) {
            return res.status(400).json({ success: false, message: 'Missing information' });
        }

        const updateReq = await Requests.findByIdAndUpdate(id, { status: status });

        const resRequests = await Requests.find();

        return res.status(200).json({ success: true, message: 'Updated request', updateReq, resRequests });
    } catch (err) {
        console.error(err);

        return res.status(500).json({ success: false, messasge: err.message ? err?.message : 'Internal server error' });
    }
}

export { getShipments, getRequests, updateRequest }