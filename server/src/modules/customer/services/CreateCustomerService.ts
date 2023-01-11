import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import { IDataCustomerDTO } from "../dtos/IDataCustomerDTO";
import { Customer } from "../infra/database/entities/Customer";
import ICustomersRepository from "../infra/repositories/ICustomersRepository";


@injectable()
class CreateCustomerService {

  constructor(
    @inject("CustomersRepository") private customersRepository: ICustomersRepository
  ) { }

  public async execute(data: IDataCustomerDTO): Promise<Customer> {
    const checkCustomerExists = await this.customersRepository.findByDocument(data.document);

    if (checkCustomerExists) {
      throw new AppError('Customer document already used');
    }

    const customer = await this.customersRepository.create(data);

    return customer;
  }
}

export default CreateCustomerService;