import express from 'express';
import { usersController } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  usersController.createUser
);

router.get('/', usersController.getAllUsers);

router.get('/:id', usersController.getSingleUser);

router.patch('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

export const UserRoutes = router;
