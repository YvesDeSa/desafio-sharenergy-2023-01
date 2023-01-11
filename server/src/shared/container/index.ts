import { container } from 'tsyringe';

import '../../modules/users/providers';

import IUsersRepository from '../../modules/users/infra/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/infra/database/repositories/UsersRepository';

import ICustomersRepository from '../../modules/customer/infra/repositories/ICustomersRepository';
import { CustomersRepository } from '../../modules/customer/infra/database/repositories/CustomersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository
);

