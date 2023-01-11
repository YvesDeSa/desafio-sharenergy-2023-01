import FakeCustomerRepository from "../src/modules/customer/infra/database/repositories/fakes/FakeCustomersRepository";
import CreateCustomerService from "../src/modules/customer/services/CreateCustomerService";
import AppError from "../src/shared/errors/AppError";

let fakeCustomerRepository: FakeCustomerRepository;
let createCustomer: CreateCustomerService;

describe('createCustomer', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository();
    createCustomer = new CreateCustomerService(
      fakeCustomerRepository
    );
  })

  it('should be able to create a new customer', async () => {
    const customer = await createCustomer.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "phone-number",
      address: "address-exemple",
      document: "document-exemple"
    });

    expect(customer).toHaveProperty('document');
  });

  it('should not be able to create a new customer with the same document as another customer', async () => {

    await createCustomer.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "phone-number",
      address: "address-exemple",
      document: "document-exemple"
    });

    await expect(createCustomer.execute({
      name: "John Hart",
      email: "johnhart@example.com",
      phone: "phone-number",
      address: "address-exemple",
      document: "document-exemple"
    })).rejects.toBeInstanceOf(AppError);
  });
});