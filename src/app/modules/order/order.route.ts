import express from 'express';
import { orderController } from './order.controller';
import validateRequest from '../../middleware/validateRequest';
import { orderValidation } from './order.validation';
const router = express.Router();

router.post(
  '/create-order',
  validateRequest(orderValidation.orderZodValidation),
  orderController.createOrder
);

export const OrdersRoutes = router;
