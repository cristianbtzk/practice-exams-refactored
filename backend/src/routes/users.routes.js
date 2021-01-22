import { Router } from 'express';
import UsersController from '../app/controllers/UsersController';

const usersRouter = Router();

usersRouter.post('/', UsersController.create);

export default usersRouter;
