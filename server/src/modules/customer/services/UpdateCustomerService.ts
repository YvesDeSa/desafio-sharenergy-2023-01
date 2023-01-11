import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IDataCustomerDTO } from "../dtos/IDataCustomerDTO";
import { Customer } from "../infra/database/entities/Customer";
import ICustomersRepository from "../infra/repositories/ICustomersRepository";


@injectable()
class UpdateCustomerService {

  constructor(
    @inject("CustomersRepository") private customersRepository: ICustomersRepository
  ) { }

  public async execute(data: IDataCustomerDTO): Promise<Customer> {
    const checkCustomerExists = await this.customersRepository.findByDocument(data.document);

    if (!checkCustomerExists) {
      throw new AppError("Customer already exists");
    }

    const customer = await this.customersRepository.update(data);

    return customer;
  }

}

export default UpdateCustomerService;