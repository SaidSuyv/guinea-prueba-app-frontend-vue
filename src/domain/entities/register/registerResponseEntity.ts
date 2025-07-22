import type { UserEntity } from "../userEntity";

export interface RegisterResponseEntity {
  success: boolean;
  token: string;
  user: UserEntity;
}