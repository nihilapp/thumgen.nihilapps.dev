import { User } from '@prisma/client';
import { Api } from '@/src/utils';
import { SignInDto, SignOutDto } from '@/src/entities';

export class AuthQuery {
  static async signin(signInDto: SignInDto) {
    const data = await Api
      .postQuery<User, SignInDto>(
        '/auth/signin',
        signInDto
      );

    return data;
  }

  static async signout(signOutDto: SignOutDto) {
    const data = await Api
      .postQuery<null, SignOutDto>(
        '/auth/signout',
        signOutDto
      );

    return data;
  }
}
