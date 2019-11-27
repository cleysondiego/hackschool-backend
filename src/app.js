import 'dotenv/config';
import express from 'express';

import cors from 'cors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: '*', // caminho do front end que poderão acessar o servidor.
      })
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
