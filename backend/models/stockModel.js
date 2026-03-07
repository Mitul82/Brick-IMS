import mongoose from 'mongoose';

const stockSchema = new mongoose.model({
    material: { type: String, required: true },
    quantity: { type: String, required: true },
    supplier: { type: String, required: true },
    vehicleNo: { type: String, required: true }
});

const Stock = mongoose.model('Stock', stockSchema);

export default Stock;