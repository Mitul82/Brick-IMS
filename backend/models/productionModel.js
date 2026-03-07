import mongoose from 'mongoose';

const productionSchema = new mongoose.Schema({
    batchId: { type: String, unique: true, required: true },
    type: { type: String, enum: ['Standard Clay', 'Fly Ash', 'Refractory'], required: true },
    produced: { type: Number, required: true },
    wastage: { type: Number, required: true }
});

const Production = mongoose.model('Production', productionSchema);

export default Production;