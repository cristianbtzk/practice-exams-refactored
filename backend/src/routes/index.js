import { Router } from 'express';
import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import testsRouter from './tests.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/tests', testsRouter);

export default routes;
