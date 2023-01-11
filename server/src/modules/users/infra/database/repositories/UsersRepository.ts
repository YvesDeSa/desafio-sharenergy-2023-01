import * as GenericDal from "mongodb-generic-dal";

import IDataUserDTO from "../../../dtos/IDataUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";
import { User } from "../entities/User";

export class UsersRepository implements IUsersRepository {
  public async findByUsername(username: string): Promise<User | undefined> {
    const [user] = await GenericDal.getBy<User>("users", { username: username }, {});

    return user;
  }
  public async create(data: IDataUserDTO): Promise<User> {
    const user = await GenericDal.create<User>("users", data);

    return user;
  }
}