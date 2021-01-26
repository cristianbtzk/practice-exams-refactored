import { Router } from 'express';
import AnswersController from '../app/controllers/AnswersController';

import checkAuthentication from '../middlewares/checkAuthentication';

const answersRouter = Router();

answersRouter.use(checkAuthentication);

/**
 * @api {get} /answers/:test_id List answers from test
 * @apiGroup Answers
 * @apiParam {String} tes_id Test ID
 * @apiHeader {String} authorization JWT token
 * @apiHeaderExample Request Header
 *    {
 *      "Bearer ${token}"
 *    }
 * @apiSuccess {Object[]} answers Answers List
 * @apiSuccess {String} answers.id Answer ID
 * @apiSuccess {Number} answers.number Answer Number
 * @apiSuccess {String} answers.answer Question Answer
 * @apiSuccess {Boolean} answers.is_correct Question answer is correct
 * @apiSuccess {String} answers.created_at Data creation date
 * @apiSuccess {String} answers.updated_at Data updating date
 * @apiSuccess {String} answers.test_id Specify which test is the answer from
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *      {
 *        "id": "uuid",
 *        "number": 1,
 *        "answer": "a",
 *        "is_correct": true,
 *        "createdAt": "2021-01-23T12:53:30.213Z",
 *        "updatedAt": "2021-01-23T12:53:30.213Z",
 *        "test_id": "uuid"
 *      }
 *   ]
 * @apiError {Object} error Error object
 * @apiError {string} error.status Request status
 * @apiError {string} error.message Error message
 * @apiErrorExample Error-Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "status": "error",
 *      "message": "Invalid JWT token"
 *    }
 */

answersRouter.get('/:test_id', AnswersController.index);

export default answersRouter;
