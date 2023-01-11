import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth'
import AppError from "../../../shared/errors/AppError";
import IDataUserDTO from "../dtos/IDataUserDTO";
import IUsersRepository from "../infra/repositories/IUsersRepository";
import IHashProviders from "../providers/HashProviders/models/IHashProviders";
import { User } from "../infra/database/entities/User";

interface Response {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {

  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
    @inject('HashProvider') private hashProviders: IHashProviders) { }

  public async execute({ username, password }: IDataUserDTO): Promise<Response> {

    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppError('Incorrect username/password combination', 401);
    }

    const passwordMatched = await this.hashProviders.compareHash(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect username/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.username,
      expiresIn,
    });

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService;