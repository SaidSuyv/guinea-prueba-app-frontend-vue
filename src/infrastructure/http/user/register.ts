import type { RegisterEntity } from "@/domain/entities/register/registerEntity";
import { type RegisterResponseEntity } from "@/domain/entities/register/registerResponseEntity";
import { httpErrorFormatter } from "@/shared/httpErrorFormatter";
import { api } from "../axios";


export const register = async (userData: RegisterEntity): Promise<RegisterResponseEntity> => {
  try{
    const response = await api.post('/auth/register', userData);
    return response.data; // Assuming the API returns user data on successful registration
  }
  catch (error: any) {
    const message = httpErrorFormatter(error);
    throw new Error(message);
  }
}