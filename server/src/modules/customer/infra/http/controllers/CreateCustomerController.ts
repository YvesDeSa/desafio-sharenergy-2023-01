import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateCustomerService from "../../../services/CreateCustomerService";

export default class CreateCustomerController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    await createCustomer.execute(data);

    return response.json(data);
  }
}