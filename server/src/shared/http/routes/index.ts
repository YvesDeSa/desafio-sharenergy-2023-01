import { Router } from 'express';
import customerRoutes from '../../../modules/customer/infra/http/routes/customer.routes';
import usersRandomRouter from '../../../modules/random-user/infra/http/routes/users-random.routes';
import usersRouter from '../../../modules/users/infra/http/routes/users.routes';

const routers = Router();

routers.use('/users', usersRouter);
routers.use('/generator', usersRandomRouter);
routers.use('/customers', customerRoutes)

export default routers;