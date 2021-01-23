import { Router } from 'express';
import TestsController from '../app/controllers/TestsController';
import checkAuthentication from '../middlewares/checkAuthentication';

const testsRouter = Router();

testsRouter.use(checkAuthentication);

testsRouter.post('/', TestsController.create);
testsRouter.get('/:page', TestsController.index);

export default testsRouter;
