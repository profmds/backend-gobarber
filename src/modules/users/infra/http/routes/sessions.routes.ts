import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.get('/', async (request, response) => {
  return response.send();
});

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
