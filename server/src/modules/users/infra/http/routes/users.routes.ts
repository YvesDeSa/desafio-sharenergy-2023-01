import { Router } from 'express';
import CreateUsersController from '../controllers/CreateUserController';
import SessionsController from '../controllers/SessionsController';

const usersRouter = Router();

const createUsersController = new CreateUsersController();
const sessionsController = new SessionsController();

usersRouter.post('/create', createUsersController.create);
usersRouter.post('/session', sessionsController.create);

export default usersRouter;