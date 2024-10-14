import { User } from '@prisma/client';

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignOutDto {
  user: User;
}

export interface TokenRefreshDto {
  user: User;
}
