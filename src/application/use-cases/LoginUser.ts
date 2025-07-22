import type { AuthRepository } from "@/domain/repositories/authRepository";

export class LoginUser {
  private authRepo: AuthRepository;

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async execute(credentials: { username: string; password: string }) {
    return await this.authRepo.login(credentials);
  }
}