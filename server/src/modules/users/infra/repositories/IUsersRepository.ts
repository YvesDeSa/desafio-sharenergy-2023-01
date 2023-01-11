import IDataUserDTO from "../../dtos/IDataUserDTO";
import { User } from "../database/entities/User";

export default interface IUsersRepository {
  findByUsername(username: string): Promise<User | undefined>;
  create(data: IDataUserDTO): Promise<User>;
}