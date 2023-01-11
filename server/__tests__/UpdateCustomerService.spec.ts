import FakeCustomerRepository from "../src/modules/customer/infra/database/repositories/fakes/FakeCustomersRepository";
import CreateCustomerService from "../src/modules/customer/services/CreateCustomerService";
import UpdateCustomerService from "../src/modules/customer/services/UpdateCustomerService";
import AppError from "../src/shared/errors/AppError";

let fakeCustomerRepository: FakeCustomerRepository;
let updateCustomer: UpdateCustomerService;
let createCustomer: CreateCustomerService;

describe('updateCustomer', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository();
    updateCustomer = new UpdateCustomerService(
      fakeCustomerRepository
    );
    createCustomer = new CreateCustomerService(
      fakeCustomerRepository
    );
  })

  it('should be able to update customer', async () => {
    await createCustomer.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "phone-number",
      address: "address-exemple",
      document: "document-exemple"
    });

    const updatedCustomer = await updateCustomer.execute({
      name: "John Hart",
      email: "johnhart@example.com",
      phone: "phone-number",
      address: "address-exemple",
      document: "document-exemple"
    });

    expect(updatedCustomer.name).toBe("John Hart");
    expect(updatedCustomer.email).toBe("johnhart@example.com");
  });

  it('should not be able to update a customer already exists', async () => {
    await expect(updateCustomer.execute({
      name: "John Hart",
      email: "johnhart@example.com",
      phone: "phone-number",
      address: "address-exemple",
      document: "not-document-exemple"
    })).rejects.toBeInstanceOf(AppError);
  });
});