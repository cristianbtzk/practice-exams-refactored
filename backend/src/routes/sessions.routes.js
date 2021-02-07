const { Router } = require('express');
const SessionsController = require('../app/controllers/SessionsController');

const sessionsRouter = Router();

/**
 * @api {post} /sessions Login
 * @apiGroup Sessions
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "login@email.com"
 *       "password": "123456"
 *     }
 * @apiSuccess {Object} object Response
 * @apiSuccess {String} object.token JWT token
 * @apiSuccess {object} object.user User details
 * @apiSuccess {String} object.user.id User id
 * @apiSuccess {String} object.user.name User name
 * @apiSuccess {String} object.user.email User email
 * @apiSuccess {String} object.user.created_at User creation date
 * @apiSuccess {String} object.user.updated_at User data update date
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "user":{
 *          "id": "uuid id",
 *          "name": "John Doe",
 *          "email": "email@email.com",
 *          "createdAt": "2021-01-23T12:53:30.213Z",
 *          "updatedAt": "2021-01-23T12:53:30.213Z",
 *        }
 *        "token": "JWT TOKEN"
 *      }
 * @apiError {Object} error Error object
 * @apiError {string} error.status Request status
 * @apiError {string} error.message Error message
 * @apiErrorExample Error-Response
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "status": "error",
 *      "message": "Incorrect data"
 *    }
 */

sessionsRouter.post('/', SessionsController.create);

module.exports = sessionsRouter;
