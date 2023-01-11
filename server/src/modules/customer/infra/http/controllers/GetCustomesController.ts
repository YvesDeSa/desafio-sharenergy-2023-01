import { Request, Response } from "express";
import { container } from "tsyringe";
import FindAllCustomersService from "../../../services/FindAllCustomersService";

export default class GetCustomersController {

  public async get(request: Request, response: Response): Promise<Response> {

    const findAllCustomers = container.resolve(FindAllCustomersService);

    const customers = await findAllCustomers.execute();

    return response.json(customers);
  }
}