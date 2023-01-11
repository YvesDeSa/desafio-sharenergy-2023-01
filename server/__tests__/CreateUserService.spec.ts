import FakeUsersRepository from "../src/modules/users/infra/database/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../src/modules/users/providers/HashProviders/fakes/FakeHashProviders";
import CreateUserService from "../src/modules/users/services/CreateUserService";
import AppError from "../src/shared/errors/AppError";


let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;

let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );
  })

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      username: 'John Doe',
      password: '1234'
    });

    expect(user).toHaveProperty('username');
  });

  it('should not be able to create a new user with the same name as another user', async () => {

    await createUser.execute({
      username: 'John Doe',
      password: '1234'
    });

    await expect(createUser.execute({
      username: 'John Doe',
      password: 'abcd'
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new user with the empty username', async () => {
    await expect(createUser.execute({
      username: ' ',
      password: 'abcd'
    })).rejects.toBeInstanceOf(AppError);
  });
});