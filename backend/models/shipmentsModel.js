import mongoose from 'mongoose';

const shipmentsSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    customer: { type: String, required: true },
    vehicleNo: { type: String, required: true },
    quantity: { type: Number, required: true },
    delivery: { type: String, required: true },
    driverName: { type: String, required: true },
    gatePassURL: { type: String, default: null },
    gatepassGeneratedOn: { type: Date }
});

const Shipments = mongoose.model('shipments', shipmentsSchema);

export default Shipments;