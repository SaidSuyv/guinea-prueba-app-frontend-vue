import { httpErrorFormatter } from "@/shared/httpErrorFormatter";
import { api } from "../axios";
import type { LoginRequestEntity } from "@/domain/entities/auth/loginRequestEntity";
import type { LoginResponseEntity } from "@/domain/entities/auth/loginResponseEntity";

export const login = async (credentials: LoginRequestEntity): Promise<LoginResponseEntity> => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data; // Assuming the API returns user data on successful login
  } catch (error: any) {
    const message = httpErrorFormatter(error);
    throw new Error(message);
  }
}