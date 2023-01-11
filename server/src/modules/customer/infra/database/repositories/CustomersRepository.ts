import * as GenericDal from "mongodb-generic-dal";

import { IDataCustomerDTO } from "../../../dtos/IDataCustomerDTO";
import ICustomersRepository from "../../repositories/ICustomersRepository";
import { Customer } from "../entities/Customer";


export class CustomersRepository implements ICustomersRepository {
  public async getAll(): Promise<Customer[]> {
    return await GenericDal.getAll<Customer>("customers");
  }
  public async findByDocument(document: string): Promise<Customer | undefined> {
    const [customer] = await GenericDal.getBy<Customer>("customers", { document: document }, {});
    return customer;
  }
  public async create(data: IDataCustomerDTO): Promise<Customer> {
    return await GenericDal.create<Customer>("customers", data);
  }
  public async update(data: IDataCustomerDTO): Promise<Customer> {
    const customerByDocument = await this.findByDocument(data.document);
    return await GenericDal.createOrUpdate<Customer>("customers", { _id: customerByDocument?._id }, data) as Customer;
  }
  public async delete(document: string): Promise<void> {
    const customer = await this.findByDocument(document);
    customer && await GenericDal.remove<Customer>("customers", customer);
  }
}