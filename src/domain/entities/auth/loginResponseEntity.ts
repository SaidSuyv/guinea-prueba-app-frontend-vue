import type { UserEntity } from "../userEntity";

export interface LoginResponseEntity {
  success: boolean;
  token: string;
  user: UserEntity;
}