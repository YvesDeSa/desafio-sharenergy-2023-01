import { Router } from 'express';
import GeneratorUsersRandomController from '../controllers/GeneratorUsersRandomController';

const usersRandomRouter = Router();

const generatorUsersRandomController = new GeneratorUsersRandomController();

usersRandomRouter.get('/random', generatorUsersRandomController.create);

export default usersRandomRouter;