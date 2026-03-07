import express from 'express';

import authRoute from '../middleware/authMiddleware.js';
import authRoles from '../middleware/authRoles.js';

import { getShipments, getReceived, getIssued, addReceived, addIssued, addRequest } from '../controllers/shopkeeperController.js';

const router = express.Router();

router.get('/shipments', authRoute, authRoles('ShopKeeper'), getShipments);
router.get('/received', authRoute, authRoles('ShopKeeper'), getReceived);
router.post('/received', authRoute, authRoles('ShopKeeper'), addReceived);
router.get('/issued', authRoute, authRoles('ShopKeeper'), getIssued);
router.post('/issued', authRoute, authRoles('ShopKeeper'), addIssued);
router.post('/requests', authRoute, authRoles('ShopKeeper'), addRequest);

export default router;