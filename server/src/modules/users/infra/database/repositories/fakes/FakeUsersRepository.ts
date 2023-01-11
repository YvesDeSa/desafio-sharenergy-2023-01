import IDataUserDTO from "../../../../dtos/IDataUserDTO";
import IUsersRepository from "../../../repositories/IUsersRepository";
import { User } from "../../entities/User";

class FakeUsersRepository implements IUsersRepository {

  private users: User[] = [];

  public async findByUsername(username: string): Promise<User | undefined> {
    const [user] = this.users.filter((user) => {
      return user.username === username
    });

    return user;
  }

  public async create({ username, password }: IDataUserDTO): Promise<User> {
    const user: User = {
      username,
      password
    };

    this.users.push(user);

    return user;
  }
}

export default FakeUsersRepository;