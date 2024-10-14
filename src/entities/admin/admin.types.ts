import { User } from '@prisma/client';

export interface AdminSignInDto {
  email: string;
  password: string;
}

export interface AdminSignOutDto {
  user: User;
}

export interface AdminDeleteUsersDto {
  user: User;
  uids: string[];
}
