import { User } from '@prisma/client';
import { Api } from '@/src/utils';
import {
  AdminDeleteUsersDto, AdminSignInDto, AdminSignOutDto, TokenRefreshDto
} from '@/src/entities';

export class AdminQuery {
  static async signIn(adminSignInDto: AdminSignInDto) {
    const data = await Api.postQuery<User, AdminSignInDto>(
      '/admin/auth/signin',
      adminSignInDto
    );

    return data;
  }

  static async signout(adminSignOutDto: AdminSignOutDto) {
    const data = await Api.postQuery<null, AdminSignOutDto>(
      '/admin/auth/signout',
      adminSignOutDto
    );

    return data;
  }

  static async refresh(tokenRefreshDto: TokenRefreshDto) {
    const data = await Api
      .postQuery<User, TokenRefreshDto>(
        '/admin/auth/refresh',
        tokenRefreshDto
      );

    return data;
  }

  static async usersDeletes(adminDeleteUsersDto: AdminDeleteUsersDto) {
    const data = await Api
      .deleteWithDataQuery<null, AdminDeleteUsersDto>(
        '/admin/users',
        adminDeleteUsersDto
      );

    return data;
  }
}
