import type { LoginRequestEntity } from "../entities/auth/loginRequestEntity";
import type { LoginResponseEntity } from "../entities/auth/loginResponseEntity";
import type { RegisterEntity } from "../entities/register/registerEntity";
import type { RegisterResponseEntity } from "../entities/register/registerResponseEntity";

export interface AuthRepository {
  login(credentials: LoginRequestEntity): Promise<LoginResponseEntity>;
  logout(): Promise<boolean>;
  register(userData: RegisterEntity): Promise<RegisterResponseEntity>;
}