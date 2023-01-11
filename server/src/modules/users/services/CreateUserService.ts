import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IDateUserDTO from '../dtos/IDataUserDTO';

import { User } from '../infra/database/entities/User';

import IUsersRepository from '../infra/repositories/IUsersRepository';
import IHashProviders from '../providers/HashProviders/models/IHashProviders';


@injectable()
class CreateUserService {

  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProviders: IHashProviders) { }

  public async execute({ username, password }: IDateUserDTO): Promise<User> {

    username = username.trim();

    if (username.length === 0) {
      throw new AppError('Username cannot be empty');
    }

    const checkUserExists = await this.usersRepository.findByUsername(username);

    if (checkUserExists) {
      throw new AppError('Username address already used');
    }

    const hashedPassword = await this.hashProviders.generateHash(password);

    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;