import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB...');
        });

        return await mongoose.connect(url);
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;