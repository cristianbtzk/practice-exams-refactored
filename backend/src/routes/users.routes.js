const { Router } = require('express');
const UsersController = require('../app/controllers/UsersController');

const usersRouter = Router();

/**
 * @api {post} /users Create User
 * @apiGroup Users
 * @apiParam {String} name User name
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "John doe@email.com",
 *       "email": "johndoe@email.com",
 *       "password": "123456"
 *     }
 * @apiSuccess {Object} object Response
 * @apiSuccess {String} object.id User id
 * @apiSuccess {String} object.name User name
 * @apiSuccess {String} object.email User email
 * @apiSuccess {String} object.created_at User creation date
 * @apiSuccess {String} object.updated_at User data update date
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "id": "uuid id",
 *        "name": "John Doe",
 *        "email": "email@email.com",
 *        "createdAt": "2021-01-23T12:53:30.213Z",
 *        "updatedAt": "2021-01-23T12:53:30.213Z",
 *      }
 * @apiError {Object} error Error object
 * @apiError {string} error.status Request status
 * @apiError {string} error.message Error message
 * @apiErrorExample Error-Response
 *    HTTP/1.1 409 Conflict
 *    {
 *      "status": "error",
 *      "message": "Email already in use"
 *    }
 */

usersRouter.post('/', UsersController.create);

module.exports = usersRouter;
