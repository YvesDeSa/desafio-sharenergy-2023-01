import { Request, Response } from "express";
import { container } from "tsyringe";
import { RandomUsersGeneratorService } from "../../../services/RandomUsersGeneratorService";

export default class GeneratorUsersRandomController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { size } = request.query;

    const randomUsersGenerator = container.resolve(RandomUsersGeneratorService);

    const users = await randomUsersGenerator.execute(Number(size));

    return response.json(users);
  }
}