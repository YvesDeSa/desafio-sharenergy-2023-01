import { inject, injectable } from "tsyringe";
import { Customer } from "../infra/database/entities/Customer";
import ICustomersRepository from "../infra/repositories/ICustomersRepository";

@injectable()
class FindAllCustomersService {

  constructor(
    @inject("CustomersRepository") private customersRepository: ICustomersRepository
  ) { }

  public async execute(): Promise<Customer[]> {
    return await this.customersRepository.getAll();
  }
}

export default FindAllCustomersService;