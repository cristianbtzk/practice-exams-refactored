const { Router } = require('express');
const usersRoutes = require('./users.routes');
const sessionsRoutes = require('./sessions.routes');
const testsRouter = require('./tests.routes');
const answersRouter = require('./answers.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/tests', testsRouter);
routes.use('/answers', answersRouter);

module.exports = routes;
