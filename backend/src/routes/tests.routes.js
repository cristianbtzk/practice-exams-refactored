const { Router } = require('express');
const TestsController = require('../app/controllers/TestsController');
const checkAuthentication = require('../middlewares/checkAuthentication');

const testsRouter = Router();

testsRouter.use(checkAuthentication);

/**
 * @api {post} /tests Create test
 * @apiGroup Tests
 * @apiHeader {String} authorization JWT token
 * @apiHeaderExample Request Header
 *    {
 *      "Bearer ${token}"
 *    }
 * @apiParam {Object[]} answers Test answers
 * @apiParam {Number} answers.number Answer question number
 * @apiParam {String} answers.answer Answer
 * @apiParamExample {json} Request-Example:
 *     {
 *       "answers": [
 *          {
 *            "number": 1
 *            "answer": "a"
 *          },
 *          {
 *            "number": 2
 *            "answer": "c"
 *          }
 *       ]
 *     }
 * @apiSuccess {Object} object Response
 * @apiSuccess {String} object.id Test id
 * @apiSuccess {Number} object.score Test score
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "id": "uuid id",
 *        "score": 1000,
 *      }
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

testsRouter.post('/', TestsController.create);

/**
 * @api {get} /tests/:page List tests
 * @apiGroup Tests
 * @apiHeader {String} authorization JWT token
 * @apiHeaderExample Request Header
 *    {
 *      "Bearer ${token}"
 *    }
 * @apiParam {String} page Page number
 * @apiParamExample {json} Request-Example:
 *     "http://localhost:3333/tests/1"
 * @apiSuccess {Object} object Response
 * @apiSuccess {Number} object.count Total tests in database
 * @apiSuccess {Object[]} object.tests Tests list
 * @apiSuccess {String} object.tests.id Total tests in database
 * @apiSuccess {Number} object.tests.score Test score
 * @apiSuccess {Object} object.tests.user Test user
 * @apiSuccess {String} object.tests user.name User name
 * @apiSuccess {String} object.tests user.email User email
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "tests":[
 *          {
 *            "id": "uuid id",
 *            "score": 1000,
 *            "user": {
 *              "name": "John Doe",
 *              "email": "johndoe@email.com"
 *            }
 *          }
 *
 *        ]
 *        "count": 20
 *      }
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

testsRouter.get('/:page', TestsController.index);

module.exports = testsRouter;
