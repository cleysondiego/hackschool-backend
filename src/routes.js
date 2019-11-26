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

routes.post('/room', handle(controllers.RoomController.store));
routes.get('/room', handle(controllers.RoomController.index));

routes.post('/ask', handle(controllers.AskController.store));
routes.get('/ask/room_id', handle(controllers.AskController.index));

export default routes;
