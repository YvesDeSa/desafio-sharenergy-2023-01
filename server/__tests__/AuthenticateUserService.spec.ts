import FakeUsersRepository from "../src/modules/users/infra/database/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../src/modules/users/providers/HashProviders/fakes/FakeHashProviders";
import AuthenticateUserService from "../src/modules/users/services/AuthenticateUserService";
import AppError from "../src/shared/errors/AppError";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);
  })
  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      username: 'John Doe',
      password: '1234'
    });

    const response = await authenticateUser.execute({
      username: 'John Doe',
      password: '1234'
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    expect(authenticateUser.execute({
      username: 'John Doe',
      password: '1234'
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      username: 'John Doe',
      password: '1234'
    });

    await expect(authenticateUser.execute({
      username: 'John Doe',
      password: 'wrong-password'
    })).rejects.toBeInstanceOf(AppError);
  });

});