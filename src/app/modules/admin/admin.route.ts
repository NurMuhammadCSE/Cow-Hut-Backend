import express from 'express';
import { AdminController } from './admin.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from '../auth/auth.validation';
import { AuthController } from '../auth/auth.controller';
const router = express.Router();

router.post('/create-admin', AdminController.createAdmin);
router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

export const AdminRoutes = router;
