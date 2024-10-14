import { User } from '@prisma/client';
import { Api } from '@/src/utils';
import { CreateUserDto, DeleteUserDto, UpdateUserDto } from '@/src/entities';

export class UsersQuery {
  static async getAll() {
    const data = await Api
      .getQuery<User[]>(
        '/users'
      );

    return data;
  }

  static async getRecent() {
    const data = await Api
      .getQuery<User[]>(
        '/users/recent'
      );

    return data;
  }

  static async getById(id: number) {
    const data = await Api
      .getQuery<User>(
        `/users/${id}`
      );

    return data;
  }

  static async create(createUserDto: CreateUserDto) {
    const data = await Api
      .postQuery<User, CreateUserDto>(
        'users',
        createUserDto
      );

    return data;
  }

  static async update(
    id: number,
    updateUserDto: UpdateUserDto
  ) {
    const data = await Api
      .patchQuery<User, UpdateUserDto>(
        `users/${id}`,
        updateUserDto
      );

    return data;
  }

  static async delete(
    id: number,
    deleteUserDto: DeleteUserDto
  ) {
    const data = await Api
      .deleteWithDataQuery<User, DeleteUserDto>(
        `users/${id}`,
        deleteUserDto
      );

    return data;
  }

  static async emailSearch(emailString: string) {
    const data = await Api.getQuery<User[]>(
      `/search/user/email?email=${emailString}`
    );

    return data;
  }

  static async nameSearch(nameString: string) {
    const data = await Api.getQuery<User[]>(
      `/search/user/name?name=${nameString}`
    );

    return data;
  }
}
