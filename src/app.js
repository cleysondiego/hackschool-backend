import express from 'express';

// import Youch from 'youch';
import cors from 'cors';

import routes from './routes';

// import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    // this.exceptionHandler();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: false, // caminho do front end que poderão acessar o servidor.
      })
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  // exceptionHandler() {
  //   this.server.use(async (err, req, res, next) => {
  //     if (process.env.NODE_ENV === 'development') {
  //       const errors = await new Youch(err, req).toJSON();

  //       return res.status(500).json(errors);
  //     }
  //   });
  // }
}

export default new App().server;
