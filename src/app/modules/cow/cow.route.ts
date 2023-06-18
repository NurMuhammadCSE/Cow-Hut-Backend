import express from 'express';
import { cowsController } from './cow.controller';
const router = express.Router();

router.post('/create-cow', cowsController.createUser);

export const CowsRoutes = router;
