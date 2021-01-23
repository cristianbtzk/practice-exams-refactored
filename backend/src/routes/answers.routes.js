import { Router } from 'express';
import AnswersController from '../app/controllers/AnswersController';

import checkAuthentication from '../middlewares/checkAuthentication';

const answersRouter = Router();

answersRouter.use(checkAuthentication);

answersRouter.get('/:test_id', AnswersController.index);

export default answersRouter;
