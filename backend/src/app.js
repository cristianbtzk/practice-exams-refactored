import './bootstrap';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import './database';
import AppError from './errors/AppError';
import routes from './routes';

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

export default new App().server;
