import express from 'express';

import authRoute from '../middleware/authMiddleware.js';
import authRoles from '../middleware/authRoles.js';

import { getShipments, getProduction, getRequests, addProduction, addShipment, addRequest } from '../controllers/supervisorController.js'

const router = express.Router();

router.get('/shipments', authRoute, authRoles('Supervisor', 'Owner/Manager'), getShipments);
router.post('/shipments', authRoute, authRoles('Supervisor', 'Owner/Manager'), addShipment);
router.get('/production', authRoute, authRoles('Supervisor', 'Owner/Manager'), getProduction);
router.post('/production', authRoute, authRoles('Supervisor', 'Owner/Manager'), addProduction);
router.get('/requests', authRoute, authRoles('Supervisor', 'Owner/Manager'), getRequests);
router.post('/requests', authRoute, authRoles('Supervisor', 'Owner/Manager'), addRequest);

export default router;