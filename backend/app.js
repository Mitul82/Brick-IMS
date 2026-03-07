import 'dotenv/config';

import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import connectDB from './database/connectDB.js';

import authRoutes from './routes/authRoutes.js';
import supervisorRoutes from './routes/supervisorRoutes.js';
import shopkeeperRoutes from './routes/shopkeeperRoutes.js';

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            "default-src": ["'self'"],
            "script-src": ["'self'"],
            "style-src": ["'self'", "'unsafe-inline'"],
            "connect-src": ["'self'", process.env.FRONTEND_URL, "wss:"],
            "img-src": ["'self'", "data:", "https://res.cloudinary.com"],
            "object-src": ["'none'"],
            "base-uri": ["'self'"],
            "frame-ancestors": ["'none'"],
            "upgrade-insecure-requests": []
        }
    }
}));

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try agian after some time',
    standardHeaders: true,
    legacyHeaders: false
}));

app.use('/api/auth', authRoutes);
app.use('/api/supervisor', supervisorRoutes);
app.use('/api/shopkeeper', shopkeeperRoutes);

app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening to port ${port}...`);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

start();