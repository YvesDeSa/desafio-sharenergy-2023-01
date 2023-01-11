import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateCustomerService from "../../../services/UpdateCustomerService";

export default class UpdateCustomerController {
  public async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const updateCustomer = container.resolve(UpdateCustomerService);

    await updateCustomer.execute(data);

    return response.json(data);
  }
}