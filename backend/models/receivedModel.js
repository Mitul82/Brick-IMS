import mongoose from 'mongoose';

const receivedSchema = new mongoose.Schema({
    supplier: { type: String, required: true },
    material: { type: String, required: true },
    vehicleNo: { type: String, required: true },
    quantity: { type: String, required: true },
    receivedOn: { type: String }
});

const Received = mongoose.model('Received', receivedSchema);

export default Received;