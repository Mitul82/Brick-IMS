import express from 'express';

const router = express.Router();

import authRoute from '../middleware/authMiddleware.js';
import authRoles from '../middleware/authRoles.js';
import { getShipments, getRequests, updateRequest } from '../controllers/ownerControllers.js';

router.get('/shipments', authRoute, authRoles('Owner/Manager'), getShipments);
router.get('/requests', authRoute, authRoles('Owner/Manager'), getRequests);
router.put('/requests', authRoute, authRoles('Owner/Manager'), updateRequest);

export default router;