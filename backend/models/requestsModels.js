import mongoose from 'mongoose';

const requestShema = new mongoose.Schema({
    material: { type: String, required: true },
    quantity: { type: Number, required: true },
    reason: { type: String, default: "" },
    status: { type: String, default: "Pending", enum: ['Pending', 'Approved', 'Rejected'] },
    date: { type: String }
});

const Requests = mongoose.model('requests', requestShema);

export default Requests;