import type { AuthRepository } from "@/domain/repositories/authRepository";

export class LogoutUser {
  private authRepo: AuthRepository;

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async execute(){
    return await this.authRepo.logout();
  }
}