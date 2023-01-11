import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "../../../services/CreateUserService";

export default class CreateUsersController {
  public async create(request: Request, response: Response): Promise<Response> {

    const { username, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    await createUser.execute({
      username,
      password,
    });

    return response.json({
      username,
      password
    });
  }
}