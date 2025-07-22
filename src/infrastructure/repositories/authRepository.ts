import type { LoginRequestEntity } from "@/domain/entities/auth/loginRequestEntity";
import type { LoginResponseEntity } from "@/domain/entities/auth/loginResponseEntity";
import type { RegisterEntity } from "@/domain/entities/register/registerEntity";
import type { RegisterResponseEntity } from "@/domain/entities/register/registerResponseEntity";
import type { AuthRepository } from "@/domain/repositories/authRepository";
import { login, logout } from "@/infrastructure/http/auth";
import { register } from "../http/user/register";

export class AuthRepositoryImpl implements AuthRepository {

  async login(credentials: LoginRequestEntity): Promise<LoginResponseEntity> {
    const response = await login(credentials);

    if (!response.success) {
      throw new Error('Login failed');
    }

    return response;
  }

  async logout(): Promise<boolean> {
    const response = await logout();
    return response;
  }

  async register(userData: RegisterEntity): Promise<RegisterResponseEntity> {
    const response = await register(userData);

    if(!response.success) {
      throw new Error('Registration failed');
    }

    return response;
  }
}