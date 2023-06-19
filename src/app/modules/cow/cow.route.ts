import express from 'express';
import { cowsController } from './cow.controller';
const router = express.Router();

router.post('/create-cow', cowsController.createUser);

router.get('/:id', cowsController.getSingleCow);

router.get('/', cowsController.getAllCows);

export const CowsRoutes = router;
