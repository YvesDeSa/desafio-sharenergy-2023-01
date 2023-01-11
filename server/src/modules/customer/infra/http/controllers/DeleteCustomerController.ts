import { Request, Response } from "express";
import { container } from "tsyringe";
import DeleteCustomerService from "../../../services/DeleteCustomerService";


export default class DeleteCustomerController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { document } = request.query;

    const deleteCustomer = container.resolve(DeleteCustomerService);

    await deleteCustomer.execute(document as string);

    return response.json({ message: "Delete customer" })
  }
}