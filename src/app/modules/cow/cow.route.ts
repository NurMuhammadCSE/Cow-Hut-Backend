import express from 'express';
import { cowsController } from './cow.controller';
const router = express.Router();

router.post('/create-cow', cowsController.createCow);

// router.post('/create-cow',
//     validateRequest(cowValidation.cowZodSchema),
//     cowsController.createUser);

router.get('/:id', cowsController.getSingleCow);

router.get('/', cowsController.getAllCows);

router.patch('/:id', cowsController.updateCow);

router.delete('/:id', cowsController.deleteCow);

export const CowsRoutes = router;
