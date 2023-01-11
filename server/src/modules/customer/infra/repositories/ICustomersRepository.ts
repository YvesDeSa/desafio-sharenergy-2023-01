import { IDataCustomerDTO } from "../../dtos/IDataCustomerDTO";
import { Customer } from "../database/entities/Customer";

export default interface ICustomersRepository {
  getAll(): Promise<Customer[]>;
  findByDocument(document: string): Promise<Customer | undefined>;
  create(data: IDataCustomerDTO): Promise<Customer>;
  update(data: IDataCustomerDTO): Promise<Customer>;
  delete(document: string): Promise<void>;
}