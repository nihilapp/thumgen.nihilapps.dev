declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ACCESS_TOKEN_SECRET: string;
    NEXT_PUBLIC_REFRESH_TOKEN_SECRET: string;
    NEXT_PUBLIC_ADMIN_EMAIL: string;
    NEXT_PUBLIC_ADMIN_PASSWORD: string;
    NEXT_PUBLIC_ACCESS_TOKEN_EXPIRATION: string;
    NEXT_PUBLIC_REFRESH_TOKEN_EXPIRATION: string;
  }
}
