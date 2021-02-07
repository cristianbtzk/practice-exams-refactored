require('./database');
require('./bootstrap');
const express = require('express');
const cors = require('cors');
require('express-async-errors');

const AppError = require('./errors/AppError');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  errors() {
    this.server.use((err, request, response, _) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }
      console.error(err);

      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
  }
}

module.exports = new App().server;
