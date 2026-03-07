import express from 'express';

import authRoute from '../middleware/authMiddleware.js';
import authRoles from '../middleware/authRoles.js';

import { getShipments, getProduction, getRequests, addProduction, addShipment, addRequest } from '../controllers/supervisorController.js'

const router = express.Router();

router.get('/shipments', authRoute, authRoles('Supervisor'), getShipments);
router.post('/shipments', authRoute, authRoles('Supervisor'), addShipment);
router.get('/production', authRoute, authRoles('Supervisor'), getProduction);
router.post('/production', authRoute, authRoles('Supervisor'), addProduction);
router.get('/requests', authRoute, authRoles('Supervisor'), getRequests);
router.post('/requests', authRoute, authRoles('Supervisor'), addRequest);

export default router;