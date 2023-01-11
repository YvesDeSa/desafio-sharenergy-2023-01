import { injectable } from "tsyringe";
import randomUsersGenerator from "../../../shared/http/apis/randomUsersGenerator";

interface RandomUser {
  picture: string;
  name: string;
  email: string;
  username: string;
  age: number;
}

@injectable()
export class RandomUsersGeneratorService {

  users: RandomUser[] = [];

  public async execute(size: number): Promise<RandomUser[]> {

    while (this.users.length < size) {

      const { data } = await randomUsersGenerator.get('/');

      this.users.push({
        picture: data.results[0].picture.large,
        name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
        email: data.results[0].email,
        username: data.results[0].login.username,
        age: data.results[0].dob.age
      });
    }

    return this.users;
  }
}