import { IDataCustomerDTO } from "../../../../dtos/IDataCustomerDTO";
import ICustomersRepository from "../../../repositories/ICustomersRepository";
import { Customer } from "../../entities/Customer";


export default class FakeCustomerRepository implements ICustomersRepository {

  customers: Customer[] = [];

  public async getAll(): Promise<Customer[]> {
    return this.customers;
  }

  public async findByDocument(document: string): Promise<Customer | undefined> {
    const [costumer] = this.customers.filter((customer) => {
      return customer.document === document;
    });

    return costumer;
  }
  public async create(data: IDataCustomerDTO): Promise<Customer> {
    const costumer: Customer = data;

    this.customers.push(costumer);

    return costumer;
  }
  public async update(data: IDataCustomerDTO): Promise<Customer> {
    await this.findByDocument(data.document) && this.delete(data.document);
    return await this.create(data);
  }
  public async delete(document: string): Promise<void> {
    this.customers.filter((costumer) => {
      return costumer.document !== document
    });
  }

}