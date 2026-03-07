import mongoose from 'mongoose';

const issuedSchema = new mongoose.Schema({
    targetBatchId: { type: String, required: true },
    type: { type: String, required: true },
    customer: { type: String, required: true },
    quantity: { type: String, required: true },
    remarks: { type: String, },
    soldOn: { type: String }
});

const Issued = mongoose.model('Issued', issuedSchema);

export default Issued;