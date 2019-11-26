import { Router } from 'express';

// import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/users', (req, res) => {
  res.send('Hello World');
});

export default routes;
