import type { RegisterEntity } from "@/domain/entities/register/registerEntity";
import type { AuthRepository } from "@/domain/repositories/authRepository";

export class RegisterUser {
  private authRepo: AuthRepository;

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async execute(userData: RegisterEntity) {
    return await this.authRepo.register(userData);
  }
}