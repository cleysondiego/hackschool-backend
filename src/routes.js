import { Router } from 'express';

const routes = new Router();

routes.get('/providers', (req, res) => {
  res.send('Hello World');
});
