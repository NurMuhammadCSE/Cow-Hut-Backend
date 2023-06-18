import express from 'express';
import { UserRoutes } from '../app/modules/user/user.route';
import { CowsRoutes } from '../app/modules/cow/cow.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/cows/',
    route: CowsRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
