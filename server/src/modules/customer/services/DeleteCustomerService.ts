import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import ICustomersRepository from "../infra/repositories/ICustomersRepository";

@injectable()
class DeleteCustomerService {

  constructor(
    @inject("CustomersRepository") private customersRepository: ICustomersRepository
  ) { }

  public async execute(document: string): Promise<void> {
    const checkCustomerExists = await this.customersRepository.findByDocument(document);

    if (!checkCustomerExists) {
      throw new AppError("Customer already exists");
    }

    await this.customersRepository.delete(document);
  }
}

export default DeleteCustomerService;