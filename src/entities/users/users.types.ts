import { User, UserRole } from '@prisma/client';

export interface CreateUserDto {
  email: string;
  name: string;
  role: UserRole;
  password: string;
}

export interface UpdateUserDto {
  user: User;
  email?: string;
  name?: string;
  role?: UserRole;
  isActive?: boolean;
  image?: string;
  password?: string;
}

export interface UpdateUser {
  id: number;
  dto: UpdateUserDto;
}

export interface DeleteUserDto {
  user: User;
  uids: string[];
}

export interface DeleteUser {
  id: number;
  dto: DeleteUserDto;
}

export interface UserCheck {
  uid: string;
  password: string;
}
