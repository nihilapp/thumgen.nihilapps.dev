import { HttpStatusCode } from 'axios';
import { UserRole } from '@prisma/client';

export type ApiResponse<T> = {
  resData: T;
  message: string;
}

export type ApiError = {
  resData: null;
  message: string;
}

export interface CreateResponse<T> {
  type: 'success' | 'error'
  resData: T;
  message: string,
  status: keyof typeof HttpStatusCode;
}

export interface TokenInfo {
  uid: string;
  email: string;
  name: string;
  role: UserRole;
  exp: number;
}

interface UserPayload {
  uid: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface TokenPayload {
  payload: UserPayload;
  secret: string;
}

export interface CreateToken {
  token: string;
  exp: number;
}

export type TokenMode = 'accessToken' | 'refreshToken';

export interface ISiteMeta {
  title: string;
  url?: string;
  description?: string;
  author?: string;
  keywords?: string;
  type?: string;
  tags?: string;
  section?: string;
  created?: string;
  updated?: string;
  image?: {
    link: string;
    alt: string;
  };
}

export interface IConfigData {
  title: string;
  description: string;
  url: string;
  type: string;
  image: {
    link: string;
    alt: string;
  };
  keywords: string;
  author: {
    name: string;
    url: string;
  };
  version: string;
  googleVerfi: string;
  googleAdSrc: string;
  googleAnalyticsId: string;
  isBaseUrl: string;
}
