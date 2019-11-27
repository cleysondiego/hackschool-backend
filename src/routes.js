import { Router } from 'express';

import handle from 'express-async-handler';
import authMiddleware from './app/middlewares/auth';

import controllers from './app/controllers';

const routes = new Router();

routes.post('/users', handle(controllers.UserController.store));

routes.post('/sessions', handle(controllers.SessionController.store));

// A partir daqui tem que estar logado
routes.use(authMiddleware);

routes.get('/users/:room_id', handle(controllers.UserController.index));

routes.post('/rooms', handle(controllers.RoomController.store));
routes.get('/rooms', handle(controllers.RoomController.index));

routes.get('/score', handle(controllers.ScoreController.index));
routes.put('/score/:scorePoint', handle(controllers.ScoreController.update));

routes.post('/comments', handle(controllers.CommentController.store));
routes.get(
  '/comments/:project_id',
  handle(controllers.CommentController.index)
);

routes.post('/projects', handle(controllers.ProjectController.store));
routes.get('/projects', handle(controllers.ProjectController.index));
routes.get('/projects/:project_id', handle(controllers.ProjectController.show));
routes.put('/projects/', handle(controllers.ProjectController.update));

export default routes;
