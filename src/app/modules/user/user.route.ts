import express from 'express';
import { usersController } from './user.controller';
const router = express.Router();

router.post('/create-user', usersController.createUser);

router.get('/', usersController.getAllUsers);

router.get('/:id', usersController.getAllUsers);

router.patch('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

export const UserRoutes = router;
